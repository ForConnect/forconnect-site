"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "bot"; text: string };

const WELCOME: Msg = {
  role: "bot",
  text: "Hoi! Ik ben Connie, de digitale assistent van ForConnect. Waar kan ik u mee helpen?",
};
const KEY = "fc-chat-v1";
const MAX_MESSAGES = 40;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([WELCOME]);
  const [chatId, setChatId] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(KEY);
      if (raw) {
        const d = JSON.parse(raw);
        if (Array.isArray(d.msgs) && d.msgs.length) setMsgs(d.msgs);
        if (typeof d.chatId === "string") setChatId(d.chatId);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(KEY, JSON.stringify({ msgs, chatId }));
    } catch {}
  }, [msgs, chatId]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, busy, open]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;

    if (msgs.length >= MAX_MESSAGES) {
      setMsgs((m) => [
        ...m,
        {
          role: "bot",
          text: "Voor verdere vragen kunt u mailen naar info@forconnect.nl of appen naar +31 6 34 48 37 01.",
        },
      ]);
      return;
    }

    setInput("");
    setMsgs((m) => [...m, { role: "user", text }]);
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatId, message: text }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error("fail");
      setChatId(data.chatId);
      setMsgs((m) => [...m, { role: "bot", text: data.reply }]);
    } catch {
      setMsgs((m) => [
        ...m,
        {
          role: "bot",
          text: "Sorry, er ging iets mis. Probeer het later opnieuw of mail naar info@forconnect.nl.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-20 right-4 z-50 flex h-[min(600px,calc(100vh-7rem))] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-cyan-400/30 bg-[#0a1a3a] text-white shadow-2xl sm:w-[400px]">
          <div className="flex items-center justify-between border-b border-cyan-400/20 bg-[#071329] px-4 py-3">
            <div>
              <div className="text-lg font-semibold">Connie</div>
              <div className="text-sm text-cyan-200/70">
                Digitale assistent van ForConnect
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Sluit chat"
              className="rounded-lg p-2 text-cyan-100 hover:bg-white/10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-base leading-relaxed ${
                    m.role === "user"
                      ? "bg-[#00B8D4] text-[#040815]"
                      : "bg-[#12285a] text-white"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {busy && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-[#12285a] px-4 py-2.5 text-base text-cyan-200">
                  Connie typt...
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={send}
            className="flex gap-2 border-t border-cyan-400/20 bg-[#071329] p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={500}
              placeholder="Typ uw bericht..."
              className="min-w-0 flex-1 rounded-xl border border-cyan-400/30 bg-[#0a1a3a] px-4 py-2.5 text-base text-white placeholder:text-cyan-100/40 focus:border-cyan-300 focus:outline-none"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="rounded-xl bg-[#00B8D4] px-4 py-2.5 text-base font-semibold text-[#040815] disabled:opacity-50"
            >
              Stuur
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        className="fixed bottom-4 right-4 z-50 rounded-full bg-[#00B8D4] px-5 py-3 text-base font-semibold text-[#040815] shadow-lg hover:brightness-110"
      >
        {open ? "Sluiten" : "Chat met Connie"}
      </button>
    </>
  );
}