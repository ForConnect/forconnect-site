"use client";

import { useEffect, useState } from "react";

// Decorative waveform for the "Luister naar een echt gesprek" section.
// Pass playing={true} to animate the bars.
export default function Waveform({ playing = false, bars = 64 }: { playing?: boolean; bars?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // deterministic heights so SSR and client match
  const heights = Array.from({ length: bars }, (_, i) => {
    const v = Math.abs(Math.sin(i * 0.55) * 0.6 + Math.sin(i * 1.7) * 0.4);
    return Math.round(14 + v * 46);
  });

  return (
    <>
      <style>{`
        @keyframes fc-wave { 0%,100% { transform: scaleY(0.55); } 50% { transform: scaleY(1); } }
      `}</style>
      <div
        aria-hidden="true"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 3, height: 64, margin: "4px 0 14px" }}
      >
        {heights.map((h, i) => (
          <span
            key={i}
            style={{
              flex: 1,
              height: h,
              borderRadius: 3,
              background: i < bars * 0.35 ? "#00e5ff" : "rgba(0,229,255,0.28)",
              transformOrigin: "center",
              animation: mounted && playing ? `fc-wave ${0.9 + (i % 5) * 0.12}s ease-in-out ${(i % 7) * 0.05}s infinite` : "none",
            }}
          />
        ))}
      </div>
    </>
  );
}
