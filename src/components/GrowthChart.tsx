"use client";

import { useEffect, useRef, useState } from "react";

const MARKS = [
  { x: 8, y: 92, label: "hummed my first note (it was flat)" },
  { x: 30, y: 80, label: "nightlight #1 — it flickered, I cried" },
  { x: 52, y: 62, label: "first lullaby shipped to a real ghost" },
  { x: 74, y: 38, label: "promoted: Junior Dream Engineer" },
  { x: 92, y: 14, label: "next dream: ??? (you tell me)" },
];

export default function GrowthChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="pixel-border bg-black/60 p-4 md:p-6">
      <p className="font-mono text-[13px] text-gray-300 mb-4">
        My skills, plotted like a baby height chart taped to the nursery wall 📏
      </p>
      <svg viewBox="0 0 100 100" className="w-full h-52 md:h-64" aria-label="Pip's growth chart from first note to junior dream engineer">
        {/* wall ruler */}
        {[10, 30, 50, 70, 90].map((y) => (
          <line key={y} x1="4" y1={y} x2="96" y2={y} stroke="#222" strokeWidth="0.4" strokeDasharray="2,3" />
        ))}
        {/* growth curve */}
        <path
          d="M8 92 C 24 88, 36 74, 52 62 S 74 36, 92 14"
          fill="none"
          stroke="#ff6ec7"
          strokeWidth="1.6"
          strokeLinecap="round"
          pathLength={1}
          className={drawn ? "growth-line" : undefined}
        />
        {MARKS.map((m, i) => (
          <circle
            key={m.label}
            cx={m.x}
            cy={m.y}
            r={i === MARKS.length - 1 ? 3 : 2.2}
            fill={i === MARKS.length - 1 ? "#00ffff" : "#ffff00"}
            stroke="#0d0d2b"
            strokeWidth="0.6"
            opacity={drawn ? 1 : 0}
            style={{ transition: `opacity 0.4s ease ${0.3 + i * 0.25}s` }}
          />
        ))}
      </svg>
      <ul className="mt-3 grid sm:grid-cols-2 gap-1 font-mono text-[12px] text-[#39ff14]">
        {MARKS.map((m, i) => (
          <li key={m.label}>
            <span className={i === MARKS.length - 1 ? "text-[#00ffff]" : "text-[#ffff00]"}>★</span>{" "}
            {m.label}
          </li>
        ))}
      </ul>
    </div>
  );
}