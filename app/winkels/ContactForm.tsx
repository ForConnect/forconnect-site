"use client";

import { useState } from "react";

const CYAN = "#00e5ff";
const BG = "#0a0f1a";

const INPUT = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.15)",
  background: "#0a0f1a",
  color: "#fff",
  fontSize: 15,
  marginBottom: 12,
  boxSizing: "border-box",
} as const;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{
        background: "#111827",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: 28,
      }}
    >
      <input name="name" placeholder="Naam" style={INPUT} />
      <input name="salon" placeholder="Naam van uw winkel" style={INPUT} />
      <input name="email" type="email" required placeholder="E-mailadres (verplicht)" style={INPUT} />
      <input name="phone" type="tel" placeholder="Telefoonnummer" style={INPUT} />
      <textarea
        name="message"
        rows={4}
        placeholder="Bijvoorbeeld: minder gemiste oproepen..."
        style={INPUT}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          width: "100%",
          background: CYAN,
          color: BG,
          fontWeight: 600,
          padding: "14px 28px",
          borderRadius: 10,
          border: "none",
          cursor: "pointer",
          fontSize: 16,
        }}
      >
        {status === "sending" ? "Verzenden..." : "Verzenden"}
      </button>
      {status === "ok" && (
        <p style={{ color: CYAN, marginTop: 12 }}>Uw bericht is succesvol verzonden. Bedankt!</p>
      )}
      {status === "error" && (
        <p style={{ color: "#f87171", marginTop: 12 }}>
          Er is een fout opgetreden. Probeer het opnieuw.
        </p>
      )}
    </form>
  );
}
