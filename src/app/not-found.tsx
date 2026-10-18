"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  const [glitchText, setGlitchText] = useState("404");

  useEffect(() => {
    const chars = "01!@#$%^&*";
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchText(
          "404"
            .split("")
            .map((c) => (Math.random() > 0.7 ? chars[Math.floor(Math.random() * chars.length)] : c))
            .join("")
        );
      } else {
        setGlitchText("404");
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d0d2b] px-4">
      <div className="text-center">
        <h1
          className="text-6xl md:text-8xl mb-4 text-[#ff6ec7]"
          style={{ fontFamily: "'Press Start 2P', monospace" }}
        >
          {glitchText}
        </h1>
        <p className="text-xl text-[#00ffff] mb-2" style={{ fontFamily: "'VT323', monospace" }}>
          ERROR: PAGE NOT FOUND
        </p>
        <p className="text-gray-400 font-mono text-sm mb-8">
          The baby crawled to a page that doesn&apos;t exist yet... 👶
        </p>
        <div className="construction-bar rounded mb-4"></div>
        <p className="text-[#ffff00] font-mono text-xs mb-6 blink">
          🚧 THIS PAGE IS UNDER CONSTRUCTION 🚧
        </p>
        <div className="construction-bar rounded mb-8"></div>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#ff6ec7] text-black font-bold font-mono hover:bg-[#00ffff] transition-colors"
        >
          ← GO BACK HOME
        </Link>
        <p className="mt-6 text-gray-600 font-mono text-xs">
          Tip: Try the Konami Code on the homepage ↑↑↓↓←→←→BA
        </p>
      </div>
    </div>
  );
}