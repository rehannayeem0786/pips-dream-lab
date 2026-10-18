"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import VisitorCounter from "@/components/VisitorCounter";
import { useSound } from "@/components/SoundManager";

const BOOT_TEXT = "HELLO WORLD. I AM PIP. JUNIOR DREAM ENGINEER. NICE TO MEET YOU.";

export default function PipHero() {
  const { playDialUp, playGiggle, playRattle } = useSound();
  const [typed, setTyped] = useState("");
  const [booted, setBooted] = useState(false);
  const [awake, setAwake] = useState(false);
  const [wiggle, setWiggle] = useState(0);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i <= BOOT_TEXT.length) { setTyped(BOOT_TEXT.slice(0, i)); i++; }
      else { clearInterval(id); setTimeout(() => setBooted(true), 400); }
    }, 55);
    const t = setTimeout(() => playDialUp(), 500);
    return () => { clearInterval(id); clearTimeout(t); };
  }, [playDialUp]);

  const pokePip = () => {
    setWiggle((w) => w + 1);
    if (!awake) { setAwake(true); playGiggle(); } else { playRattle(); }
  };

  return (
    <section id="home" className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-8">
      {/* Terminal boot */}
      <div className="w-full max-w-2xl mb-6">
        <div className="bg-black border border-[#39ff14] rounded-t-lg px-4 py-2 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="ml-2 text-gray-400 font-mono text-xs">pip@midnight-nursery:~$</span>
        </div>
        <div className="bg-black/95 border border-t-0 border-[#39ff14] rounded-b-lg p-4 min-h-[110px]">
          <p className="text-[#39ff14] font-mono text-sm leading-relaxed break-words">
            <span className="text-gray-500">$ </span>{typed}<span className="blink text-[#39ff14]">█</span>
          </p>
          {booted && (
            <p className="text-[#00ffff] font-mono text-xs mt-2 opacity-70">
              [OK] Pip is dreaming... zzz. Click him to wake up.
            </p>
          )}
        </div>
      </div>

      <h1
        className="text-center mb-2 neon-glow-pink"
        style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(1.1rem, 4vw, 2.4rem)", color: "#ff6ec7" }}
      >
        PIP&apos;S DREAM LAB
      </h1>
      <p className="text-center text-[#00ffff] font-mono text-sm md:text-base mb-4 px-2">
        &quot;I build the dreams you fall asleep inside.&quot;
      </p>

      {/* Sleeping Pip — click to wake (the easter egg) */}
      <div
        role="button"
        tabIndex={0}
        aria-label={awake ? "Pip is awake — click to hear a rattle" : "Wake Pip up"}
        onClick={pokePip}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pokePip(); } }}
        className="relative w-full max-w-md aspect-[4/3] cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6ec7] rounded-xl"
      >
        <div key={wiggle} className={`absolute inset-0 ${awake ? "pip-wiggle" : "pip-float"}`}>
          <Image
            src="/pip/pip_avatar_cloud.png"
            alt="Pip the skull-faced baby in a starred nightcap, floating on a sleepy cloud"
            fill
            sizes="(max-width: 768px) 92vw, 440px"
            className="object-contain"
            priority
          />
        </div>
        {!awake && (
          <span
            className="absolute top-2 right-4 text-2xl font-bold text-white drop-shadow-[0_0_8px_#00ffff]"
            style={{ animation: "z-drift 2.4s ease-in-out infinite" }}
            aria-hidden="true"
          >
            z Z z
          </span>
        )}
        {awake && (
          <span className="absolute top-0 left-0 md:left-4 max-w-[230px] bg-white text-black rounded-xl px-3 py-2 text-xs md:text-sm font-mono shadow-lg -rotate-3">
            HI!! I&apos;m Pip! *giggles* You&apos;re here!! ✨
          </span>
        )}
      </div>

      <p className={`mt-3 mb-4 font-mono text-xs md:text-sm text-[#ffff00] ${awake ? "" : "blink"}`}>
        {awake ? "👆 click again — Pip hates silence!" : "👆 psst… click Pip to wake him"}
      </p>

      <VisitorCounter />

      {/* Retro marquee */}
      <div className="w-full mt-6 overflow-hidden bg-black/50 border-y border-[#ff6ec7]/40 py-1">
        <div className="marquee-content font-mono text-xs sm:text-sm text-[#ffff00]">
          ★ WELCOME TO THE MIDNIGHT NURSERY ★ SIGN MY DREAM JOURNAL ★ BEST VIEWED WITH THE LIGHTS OFF ★ NO FRAMES WERE HARMED ★
        </div>
      </div>
    </section>
  );
}