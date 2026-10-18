"use client";

import Image from "next/image";
import { useSound } from "@/components/SoundManager";

export default function LullabyLab() {
  const { lullabyOn, toggleLullaby, playRattle, muted } = useSound();

  return (
    <div className="pixel-border bg-black/60 p-4 md:p-6">
      <div className="grid md:grid-cols-[190px_1fr] gap-5 items-center">
        <div className="relative w-full max-w-[210px] mx-auto aspect-square">
          <Image
            src="/pip/pip_lullaby_box.png"
            alt="Pip's pastel music box with a golden winding key and floating star chimes"
            fill
            sizes="210px"
            className="object-contain"
          />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span
              className={`text-xs font-mono px-2 py-1 border ${
                lullabyOn ? "border-[#39ff14] text-[#39ff14]" : "border-gray-500 text-gray-400"
              }`}
            >
              {lullabyOn ? "● RUNNING" : "○ SLEEPING"}
            </span>
            <span className="text-xs text-gray-500 font-mono">generative · web audio · 0 audio files</span>
          </div>
          <p className="font-mono text-[13px] text-gray-300 mb-4 leading-relaxed">
            My music box composes a little pentatonic phrase, gently drifts key, and plays it again. Every
            note is a live oscillator synthesized in your browser — no MP3s, just math and feelings.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={toggleLullaby}
              aria-pressed={lullabyOn}
              className="px-5 py-3 bg-[#ff6ec7] text-black font-bold hover:bg-[#00ffff] transition-colors cursor-pointer"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.65rem" }}
            >
              {lullabyOn ? "⏹ STOP BOX" : "🎵 WIND THE BOX"}
            </button>
            <button
              onClick={playRattle}
              className="px-5 py-3 border-2 border-[#ffff00] text-[#ffff00] font-bold hover:bg-[#ffff00] hover:text-black transition-colors cursor-pointer"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.65rem" }}
            >
              🪇 SHAKE RATTLE
            </button>
          </div>
          {lullabyOn && !muted && (
            <p className="mt-3 text-[#ff6ec7] font-mono text-sm animate-pulse">
              ♪ ♪ ♪ now playing: &quot;pip&apos;s rainy tuesday&quot; ♪ ♪ ♪
            </p>
          )}
          {lullabyOn && muted && (
            <p className="mt-3 text-gray-400 font-mono text-sm">
              🔇 muted — Pip gives you a sad look. Hit the pink button to hear the box!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}