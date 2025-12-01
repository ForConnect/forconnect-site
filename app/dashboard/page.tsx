"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { motion } from "framer-motion";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Sun, Moon } from "lucide-react";

export default function DashboardPage() {
  const { theme, setTheme } = useTheme();
  const [text, setText] = useState("");
  const [aiResponse, setAiResponse] = useState<string[]>([]);
  const [jsonResult, setJsonResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const webhookUrl =
    "https://hook.eu2.make.com/dvtr775ufib71i1x264jkf9fb4y88mvt";

  async function handleSend() {
    if (!text.trim()) return;

    setLoading(true);
    setAiResponse([]);
    setJsonResult(null);

    try {
      const payload = {
        text,
        session_id: "fc_test_session",
        salon_id: "arnhem_test",
      };

      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.ai_messages && Array.isArray(data.ai_messages)) {
        setAiResponse(data.ai_messages);
      } else if (data.ai_message) {
        setAiResponse([data.ai_message]);
      }

      setJsonResult(data);
    } catch (err) {
      console.error("Error:", err);
      setAiResponse(["Fout bij communicatie met de webhook."]);
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      {/* =========================== */}
      {/* 🔝 FORCONNECT STICKY HEADER */}
      {/* =========================== */}
      <header className="sticky top-0 z-50 w-full bg-[#0B0F19] border-b border-[#111827]">
  <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
    
    {/* LEFT: LOGO */}
    <div className="flex items-center space-x-3">
      {/* LOGO ICON (glow + square) */}
      <div className="h-10 w-10 rounded-xl bg-[#0E1628] flex items-center justify-center relative shadow-md">
        <div className="absolute inset-0 rounded-xl bg-[#00E5FF] opacity-20 blur-xl"></div>
        <span className="relative text-[#00E5FF] text-xl font-bold">F</span>
      </div>

      {/* TEXT */}
      <div className="flex flex-col leading-tight">
        <span className="text-white font-semibold text-lg">ForConnect</span>
        <span className="text-gray-400 text-xs">AI Voice Agent</span>
      </div>
    </div>

    {/* RIGHT: THEME SWITCH */}
    <Button
      variant="ghost"
      size="icon"
      className="text-white hover:bg-white/10"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  </div>
</header>

      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center my-10"
      >
        AI Agent Dashboard
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-20">
        {/* USER INPUT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="shadow">
            <CardHeader>
              <CardTitle>User Input</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Textarea
                placeholder="Bijvoorbeeld: Ik wil morgen om drie uur knippen."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-[120px]"
              />
              <Button onClick={handleSend} disabled={loading} className="w-full">
                {loading ? "Versturen..." : "Send"}
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* AI RESPONSE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="shadow h-full">
            <CardHeader>
              <CardTitle>AI Response</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[350px] pr-3">
                {loading && <p className="text-muted-foreground">AI agent typet...</p>}
                {!loading && aiResponse.length === 0 && (
                  <p className="text-muted-foreground text-sm">
                    Geen AI berichten beschikbaar.
                  </p>
                )}
                {aiResponse.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-accent p-3 rounded-lg mb-2"
                  >
                    {msg}
                  </motion.div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </motion.div>

        {/* JSON RESULT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="shadow h-full">
            <CardHeader>
              <CardTitle>JSON Result</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[350px] pr-3">
                {!jsonResult ? (
                  <p className="text-muted-foreground text-sm">Geen JSON resultaat.</p>
                ) : (
                  <pre className="bg-black text-green-400 p-4 rounded-lg text-xs overflow-auto">
                    {JSON.stringify(jsonResult, null, 2)}
                  </pre>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
