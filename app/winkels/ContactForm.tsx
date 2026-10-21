"use client";

import { useState } from "react";

const CYAN = "#00e5ff";
const BG = "#0a0f1a";
const TEXT = "#0f172a";

const INPUT = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid rgba(15,23,42,0.2)",
  background: "#ffffff",
  color: TEXT,
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
        background: "#ffffff",
        border: "1px solid rgba(15,23,42,0.10)",
        boxShadow: "0 1px 3px rgba(15,23,42,0.06)",
        borderRadius: 16,
        padding: 22,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
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
        style={{ ...INPUT, flex: 1, minHeight: 110, resize: "none", fontFamily: "inherit" }}
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
        <p style={{ color: "#0e7490", marginTop: 12 }}>Uw bericht is succesvol verzonden. Bedankt!</p>
      )}
      {status === "error" && (
        <p style={{ color: "#dc2626", marginTop: 12 }}>
          Er is een fout opgetreden. Probeer het opnieuw.
        </p>
      )}
    </form>
  );
}
