import { NextResponse } from "next/server";

const RETELL_URL = "https://api.retellai.com";
const AGENT_ID =
  process.env.RETELL_AGENT_ID || "agent_8d5f70931454b5c4584dfd1a51";
const MAX_LEN = 500;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQ = 30;

type RetellMsg = { role?: string; content?: string };

const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_REQ;
}

async function retell(path: string, body: unknown) {
  const res = await fetch(`${RETELL_URL}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RETELL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Retell ${path} ${res.status}`);
  return res.json();
}

async function newChat(): Promise<string> {
  const chat = await retell("/create-chat", { agent_id: AGENT_ID });
  return chat.chat_id as string;
}

async function complete(id: string, content: string) {
  return retell("/create-chat-completion", { chat_id: id, content });
}

export async function POST(req: Request) {
  try {
    const ip = (req.headers.get("x-forwarded-for") || "unknown")
      .split(",")[0]
      .trim();
    if (limited(ip)) {
      return NextResponse.json({ error: "rate_limited" }, { status: 429 });
    }

    const body = await req.json();
    const text = typeof body.message === "string" ? body.message.trim() : "";
    if (!text || text.length > MAX_LEN) {
      return NextResponse.json({ error: "bad_message" }, { status: 400 });
    }

    let id: string =
      typeof body.chatId === "string" && body.chatId ? body.chatId : "";
    let completion;
    if (id) {
      try {
        completion = await complete(id, text);
      } catch {
        id = await newChat(); // oude chat is verlopen
        completion = await complete(id, text);
      }
    } else {
      id = await newChat();
      completion = await complete(id, text);
    }

    const reply = ((completion.messages || []) as RetellMsg[])
      .filter((m) => m.role === "agent" && m.content)
      .map((m) => m.content)
      .join("\n\n");

    return NextResponse.json({ chatId: id, reply: reply || "..." });
  } catch {
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}