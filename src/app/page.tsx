"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import StarField from "@/components/StarField";
import CuteAmbient from "@/components/CuteAmbient";
import PipFace from "@/components/PipFace";
import SparkleCursor from "@/components/SparkleCursor";
import RetroNav from "@/components/RetroNav";
import KonamiCode from "@/components/KonamiCode";
import ScrollReveal from "@/components/ScrollReveal";
import PipHero from "@/components/PipHero";
import AboutPip from "@/components/AboutPip";
import PipWork from "@/components/PipWork";
import PipStory from "@/components/PipStory";
import GraphifySection from "@/components/GraphifySection";
import Guestbook from "@/components/Guestbook";
import WebRing from "@/components/WebRing";
import Credits from "@/components/Credits";
import { SoundProvider, useSound, MuteButton } from "@/components/SoundManager";

function HomeInner() {
  const { playSuccess, lullabyOn, toggleLullaby } = useSound();
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleKonami = useCallback(() => {
    setShowEasterEgg(true);
    playSuccess();
    if (!lullabyOn) toggleLullaby();
  }, [playSuccess, lullabyOn, toggleLullaby]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarField />
      <CuteAmbient />
      <SparkleCursor />
      <RetroNav />
      <MuteButton />
      <KonamiCode onActivate={handleKonami} />

      {showEasterEgg && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 px-4">
          <div className="text-center p-8 pixel-border bg-black max-w-md w-full">
            <PipFace className="w-14 h-14 mx-auto mb-3" />
            <h2
              className="mb-3 rainbow-text"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.75rem" }}
            >
              SECRET LULLABY UNLOCKED!
            </h2>
            <p className="font-mono text-sm mb-3" style={{ color: "#ffd700" }}>
              (´｡• ᵕ •｡`) ♪ ♪ ♪
            </p>
            <p className="text-[#39ff14] font-mono mb-2 text-sm">
              You found Pip&apos;s dream code (↑↑↓↓←→←→BA).
            </p>
            <p className="text-[#00ffff] font-mono text-sm mb-4">
              +1000 nostalgia points. The music box is humming now — Pip is delighted.
            </p>
            <button
              onClick={() => setShowEasterEgg(false)}
              className="btn-cute px-6 py-2 bg-[#ff6ec7] text-black font-bold font-mono hover:bg-[#00ffff] transition-colors cursor-pointer"
            >
              CLOSE ✿
            </button>
          </div>
        </div>
      )}

      <PipHero />

      <ScrollReveal>
        <AboutPip />
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <PipWork />
      </ScrollReveal>

      <ScrollReveal>
        <PipStory />
      </ScrollReveal>

      {/* KNOWLEDGE GRAPH — how this site is wired */}
      <ScrollReveal>
        <section className="relative z-10 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <GraphifySection />
          </div>
        </section>
      </ScrollReveal>

      {/* DREAM JOURNAL (guestbook) */}
      <ScrollReveal>
        <section id="journal" className="relative z-10 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-center mb-3 text-[#ffff00]"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(0.7rem, 2vw, 1rem)" }}
            >
              📝 THE DREAM JOURNAL
            </h2>
            <p className="text-center font-mono text-xs text-gray-400 mb-6">
              Pip reads every wish before bed · persists across visits · remembers returning dreamers
            </p>
            <Guestbook onSuccess={playSuccess} />
          </div>
        </section>
      </ScrollReveal>

      {/* CREDITS (required by the brief) */}
      <ScrollReveal>
        <Credits />
      </ScrollReveal>

      {/* WEB RING */}
      <section className="relative z-10 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <WebRing />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-8 px-4 border-t border-[#333]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <PipFace className="w-14 h-14" />
          </div>
          <div className="construction-bar rounded mb-4" aria-hidden="true" />
          <p className="font-mono text-xs text-[#ffff00] blink mb-4">
            🚧 THE NURSERY IS ALWAYS UNDER CONSTRUCTION 🚧
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-4 font-mono text-sm">
            <Link href="/story" className="text-[#ff6ec7] hover:text-[#00ffff] transition-colors underline">
              📖 Story behind the build
            </Link>
            <span className="text-gray-600">·</span>
            <a href="#credits" className="text-[#9b59b6] hover:text-[#00ffff] transition-colors underline">
              🎨 Credits
            </a>
            <span className="text-gray-600">·</span>
            <a href="#home" className="text-[#39ff14] hover:text-[#00ffff] transition-colors underline">
              🏠 Back to top
            </a>
          </div>

          <p className="font-mono text-sm text-gray-400 mb-2">
            Built with 💖 for the{" "}
            <a
              href="https://hax.baby/first-website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff6ec7] hover:underline"
            >
              haX.baby
            </a>{" "}
            Baby&apos;s First Website hackathon · Track 1 — Same Baby, 1,000 Websites
          </p>
          <p className="font-mono text-xs text-gray-600 mb-4">Oct 17–19, 2026 · 48 cozy hours · solo builder</p>

          <div className="flex justify-center gap-3 text-xs font-mono text-gray-500 flex-wrap">
            <span>📱 mobile-first</span><span>•</span>
            <span>🔊 Web Audio + mute</span><span>•</span>
            <span>✨ sparkle cursor</span><span>•</span>
            <span>📝 live journal</span>
          </div>

          <div className="mt-4 text-xs font-mono text-gray-600">
            <a
              href="https://github.com/Graphify-Labs/graphify"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9b59b6] hover:text-[#00ffff] transition-colors"
            >
              Knowledge graph inspired by Graphify
            </a>
          </div>
          <p className="mt-4 text-[10px] font-mono text-gray-700">
            Pip © haX.baby (official free Track 1 asset pack) · sounds &amp; lullabies synthesized live ·
            made with Notepad.exe, Red Bull &amp; dial-up nostalgia
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <SoundProvider>
      <HomeInner />
    </SoundProvider>
  );
}