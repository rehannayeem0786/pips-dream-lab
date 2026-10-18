"use client";

import { useEffect, useState } from "react";

const MODES = [
  { mq: "(orientation: landscape) and (max-height: 560px)", label: "LANDSCAPE CRIB", icon: "🔄", note: "hero splits sideways" },
  { mq: "(max-width: 640px)", label: "MOBILE NURSERY", icon: "📱", note: "1-col · 44px touches · turbo marquee" },
  { mq: "(max-width: 1024px)", label: "TABLET PLAYPEN", icon: "🧸", note: "cozy mid-size glide" },
  { mq: "(min-width: 1025px)", label: "DESKTOP DREAMSCAPE", icon: "🖥️", note: "full neon spread" },
];

type Mode = (typeof MODES)[number];

export default function ChaosMode() {
  const [mode, setMode] = useState<Mode | null>(null);

  useEffect(() => {
    const lists = MODES.map((m) => ({ m, list: window.matchMedia(m.mq) }));
    const update = () => {
      const hit = lists.find((x) => x.list.matches);
      const next = hit ? hit.m : MODES[3];
      setMode(next);
      document.documentElement.dataset.chaos = next.label.toLowerCase().replace(/\s+/g, "-");
    };
    update();
    lists.forEach((x) => x.list.addEventListener("change", update));
    return () => lists.forEach((x) => x.list.removeEventListener("change", update));
  }, []);

  return (
    <div
      className="fixed bottom-4 left-4 z-[9999] pixel-border bg-black/85 px-3 py-2 font-mono text-[10px] leading-relaxed text-[#39ff14] max-w-[200px] rotate-[-1.5deg]"
      title="Responsive Chaos Mode — the layout mutates per breakpoint (official side quest)"
      aria-label={`Responsive chaos mode: ${mode ? mode.label : "scanning"}`}
    >
      <p className="text-[#ff6ec7] font-bold">
        <span className="blink" aria-hidden="true">🌀</span> CHAOS MODE
      </p>
      <p className="text-white">{mode ? `${mode.icon} ${mode.label}` : "…scanning screen…"}</p>
      <p className="text-gray-400">{mode ? mode.note : "resize me!"}</p>
    </div>
  );
}