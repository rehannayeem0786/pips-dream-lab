"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { useSound } from "@/components/SoundManager";

const LAMPS: { id: string; name: string; svg: ReactNode }[] = [
  {
    id: "moon",
    name: "Crescent",
    svg: (
      <path d="M42 6a26 26 0 1 0 16 46A30 30 0 0 1 42 6z" fill="currentColor" />
    ),
  },
  {
    id: "star",
    name: "North Star",
    svg: <polygon points="32,6 39,25 59,25 43,37 49,57 32,45 15,57 21,37 5,25 25,25" fill="currentColor" />,
  },
  {
    id: "bulb",
    name: "Old Bulb",
    svg: (
      <g fill="currentColor">
        <circle cx="32" cy="26" r="16" />
        <rect x="24" y="42" width="16" height="10" rx="2" />
        <rect x="26" y="54" width="12" height="5" rx="2" />
      </g>
    ),
  },
  {
    id: "shroom",
    name: "Toadstool",
    svg: (
      <g fill="currentColor">
        <path d="M8 34a24 18 0 0 1 48 0z" />
        <rect x="26" y="34" width="12" height="24" rx="5" />
        <circle cx="20" cy="26" r="4" fill="#0d0d2b" />
        <circle cx="38" cy="22" r="5" fill="#0d0d2b" />
      </g>
    ),
  },
  {
    id: "heart",
    name: "Heart Lamp",
    svg: (
      <path
        d="M32 56S8 42 8 25a13 13 0 0 1 24-6 13 13 0 0 1 24 6c0 17-24 31-24 31z"
        fill="currentColor"
      />
    ),
  },
];

export default function Nightlights() {
  const [lit, setLit] = useState<Set<string>>(new Set(["moon", "star"]));
  const { playClick } = useSound();

  const toggle = (id: string) => {
    playClick();
    setLit((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="pixel-border bg-black/60 p-4 md:p-6">
      <div className="grid md:grid-cols-[1fr_200px] gap-5 items-center">
        <div>
          <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
            <span className="font-mono text-xs text-gray-400">click a lamp — pip clicks with you ✨</span>
            <span className="font-mono text-xs text-[#ffff00]">{lit.size}/{LAMPS.length} lit</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {LAMPS.map((lamp) => {
              const on = lit.has(lamp.id);
              return (
                <button
                  key={lamp.id}
                  onClick={() => toggle(lamp.id)}
                  aria-pressed={on}
                  aria-label={`${on ? "Switch off" : "Switch on"} the ${lamp.name} lamp`}
                  className={`aspect-square rounded-lg border-2 p-2 transition-all duration-300 cursor-pointer ${
                    on
                      ? "border-[#ffff00] bg-[#ffff00]/10 text-[#ffff00]"
                      : "border-[#333] bg-black text-gray-600 hover:border-gray-400"
                  }`}
                  style={on ? { filter: "drop-shadow(0 0 10px #ffff00)" } : undefined}
                >
                  <svg viewBox="0 0 64 64" className="w-full h-full">{lamp.svg}</svg>
                </button>
              );
            })}
          </div>
        </div>
        <div className="relative w-full max-w-[200px] mx-auto aspect-square">
          <Image
            src="/pip/pip_dream_lantern.png"
            alt="Glowing crescent moon porcelain nightlight with a brass handle — the lantern that started the collection"
            fill
            sizes="200px"
            className="object-contain"
          />
        </div>
      </div>
      <p className="mt-3 font-mono text-[12px] text-gray-400 text-center md:text-left">
        🌙 The porcelain moon lantern was nightlight #0 — the one that made me. The rest are the lamps I
        designed for the nursery&apos;s little ghosts.
      </p>
    </div>
  );
}