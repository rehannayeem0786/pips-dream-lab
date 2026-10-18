"use client";

import { useState, useEffect, useCallback } from "react";
import StarField from "@/components/StarField";
import VisitorCounter from "@/components/VisitorCounter";
import Guestbook from "@/components/Guestbook";
import GraphifySection from "@/components/GraphifySection";
import KonamiCode from "@/components/KonamiCode";
import { useSound, MuteButton } from "@/components/SoundManager";

export default function Home() {
  const { muted, toggleMute, playClick, playSuccess, playDialUp } = useSound();
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [showConstruction, setShowConstruction] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [bootComplete, setBootComplete] = useState(false);
  const fullText = "HELLO WORLD. I AM BABY. THIS IS MY FIRST WEBSITE.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) { setTypedText(fullText.slice(0, i)); i++; }
      else { clearInterval(interval); setTimeout(() => setBootComplete(true), 500); }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => playDialUp(), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleKonami = useCallback(() => { setShowEasterEgg(true); playSuccess(); }, [playSuccess]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarField />
      <MuteButton muted={muted} onToggle={toggleMute} />
      <KonamiCode onActivate={handleKonami} />
      {showEasterEgg && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90">
          <div className="text-center p-8 pixel-border bg-black max-w-md">
            <p className="text-4xl mb-4">🎉👶🎉</p>
            <h2 className="mb-4 rainbow-text" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.8rem" }}>KONAMI CODE UNLOCKED!</h2>
            <p className="text-[#39ff14] font-mono mb-4">You found the secret! +1000 nostalgia points.</p>
            <button onClick={() => setShowEasterEgg(false)} className="px-6 py-2 bg-[#ff6ec7] text-black font-bold font-mono hover:bg-[#00ffff] transition-colors cursor-pointer">CLOSE</button>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-2xl mb-8">
          <div className="bg-black border border-[#39ff14] rounded-t-lg px-4 py-2 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="ml-2 text-gray-400 font-mono text-xs">baby@hax:~$</span>
          </div>
          <div className="bg-black/95 border border-t-0 border-[#39ff14] rounded-b-lg p-4 min-h-[120px]">
            <p className="text-[#39ff14] font-mono text-sm leading-relaxed">
              <span className="text-gray-500">$ </span>{typedText}<span className="blink text-[#39ff14]">█</span>
            </p>
            {bootComplete && (
              <p className="text-[#00ffff] font-mono text-xs mt-2 opacity-70">[OK] Website initialized. Loading memories...</p>
            )}
          </div>
        </div>

        <h1 className="text-center mb-4 neon-glow-pink" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(1.2rem, 4vw, 2.5rem)", color: "#ff6ec7" }}>
          BABY&apos;S FIRST<br />WEBSITE
        </h1>
        <p className="text-center text-xl md:text-2xl mb-6 text-[#00ffff]" style={{ fontFamily: "'VT323', monospace" }}>
          A nostalgic journey through every era of the internet
        </p>

        {showConstruction && (
          <div className="w-full max-w-md mb-6">
            <div className="construction-bar rounded"></div>
            <div className="bg-[#ffcc00] text-black text-center py-2 font-mono text-sm font-bold flex items-center justify-center gap-2">
              <span className="animate-spin inline-block">🚧</span> UNDER CONSTRUCTION <span className="animate-spin inline-block">🚧</span>
              <button onClick={() => { setShowConstruction(false); playClick(); }} className="ml-2 text-xs underline cursor-pointer">(dismiss)</button>
            </div>
            <div className="construction-bar rounded"></div>
          </div>
        )}

        <div className="mb-8"><VisitorCounter /></div>
        <div className="float text-[#ffff00] text-2xl cursor-pointer" onClick={() => { document.getElementById("era-1995")?.scrollIntoView({ behavior: "smooth" }); playClick(); }}>▼</div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden py-2 bg-black/80 border-y border-[#ff6ec7]/30 relative z-10">
        <div className="marquee-content text-[#ffff00] font-mono text-sm">
          ★ WELCOME TO MY HOMEPAGE ★ BEST VIEWED IN NETSCAPE NAVIGATOR 4.0 ★ SIGN MY GUESTBOOK ★ YOU ARE VISITOR #001337 ★ MADE WITH 💖 AND HTML ★ NO FRAMES WERE HARMED ★
        </div>
      </div>

      {/* ERA 1: 1995 GeoCities */}
      <section id="era-1995" className="relative z-10 py-16 px-4 era-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8 rainbow-text" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(0.7rem, 2vw, 1rem)" }}>
            📼 ERA 1: 1995 — THE GEOCITIES ERA
          </h2>
          <div className="border-4 border-[#808080] bg-[#c0c0c0] p-1">
            <div className="bg-[#000080] text-white px-3 py-1 flex items-center justify-between">
              <span className="font-mono text-sm">🌐 Baby&apos;s Homepage - Netscape</span>
              <span className="font-mono text-xs">□ ✕</span>
            </div>
            <div className="bg-[#c0c0c0] p-4 text-black">
              <table className="w-full border-collapse border-2 border-[#808080]" cellPadding={8}>
                <tbody>
                  <tr>
                    <td className="border border-[#808080] bg-white font-mono text-sm">
                      <p className="text-[#0000cc] underline cursor-pointer">🏠 Home</p>
                      <p className="text-[#0000cc] underline cursor-pointer">📖 About Baby</p>
                      <p className="text-[#0000cc] underline cursor-pointer">🔗 Cool Links</p>
                      <p className="text-[#0000cc] underline cursor-pointer">📧 Email Me</p>
                    </td>
                    <td className="border border-[#808080] bg-white">
                      <p className="font-mono text-sm mb-2"><b>WELCOME TO MY CORNER OF THE WEB!!!</b></p>
                      <p className="font-mono text-sm mb-2">Hi! I&apos;m Baby and this is my very first website! I made it all by myself (well, with a little help from my squad 👶👶👶).</p>
                      <p className="font-mono text-sm text-[#ff0000]"><b>⚠️ PLEASE SIGN MY GUESTBOOK!!! ⚠️</b></p>
                      <div className="mt-4 text-center">
                        <span className="inline-block bg-[#ffcc00] px-2 py-1 font-mono text-xs border border-black">🚧 This page is always under construction 🚧</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center mt-4 font-mono text-xs text-[#808080]">
                <p>Made with Notepad.exe | Best viewed at 800x600</p>
                <p>© 1995 Baby. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ERA 2: 2005 MySpace */}
      <section className="relative z-10 py-16 px-4 era-section bg-gradient-to-b from-transparent via-[#1a0033]/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8 neon-glow-cyan" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(0.7rem, 2vw, 1rem)", color: "#00ffff" }}>
            💿 ERA 2: 2005 — THE MYSPACE ERA
          </h2>
          <div className="bg-[#1a1a2e] border-2 border-[#6a0dad] rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#6a0dad] to-[#0066cc] p-3">
              <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Comic Neue', cursive" }}>🎵 Baby&apos;s Profile | &quot;living my best life ✨&quot;</h3>
            </div>
            <div className="p-4 grid md:grid-cols-2 gap-4">
              <div>
                <div className="bg-black/40 border border-[#6a0dad] p-3 rounded mb-3">
                  <p className="text-[#ff6ec7] font-bold mb-1" style={{ fontFamily: "'Comic Neue', cursive" }}>About Me:</p>
                  <p className="text-gray-300 text-sm" style={{ fontFamily: "'Comic Neue', cursive" }}>hey!! im baby 🍼 i like building websites, listening to early 2000s pop punk, and customizing my myspace with glitter graphics. add me!! 💕</p>
                </div>
                <div className="bg-black/40 border border-[#6a0dad] p-3 rounded">
                  <p className="text-[#ff6ec7] font-bold mb-1" style={{ fontFamily: "'Comic Neue', cursive" }}>Top 8 Friends:</p>
                  <div className="grid grid-cols-4 gap-1 text-center text-xs">
                    {["Tom", "HTML", "CSS", "JS", "GeoCities", "Napster", "AIM", "Winamp"].map((f) => (
                      <div key={f} className="bg-[#333] p-1 rounded text-gray-300 truncate">{f}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-[#ff6ec7] to-[#6a0dad] rounded-full flex items-center justify-center text-6xl mb-3 pulse-glow">👶</div>
                <p className="text-[#ffff00] font-mono text-sm blink">♪ Now Playing: &quot;Mr. Brightside&quot; ♪</p>
                <div className="mt-2 bg-black/60 px-3 py-1 rounded border border-[#39ff14]">
                  <span className="text-[#39ff14] font-mono text-xs">▶ ━━━━━●━━━━ 3:47</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ERA 3: 2012 Web 2.0 */}
      <section className="relative z-10 py-16 px-4 era-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8 neon-glow-green" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(0.7rem, 2vw, 1rem)", color: "#39ff14" }}>
            📱 ERA 3: 2012 — THE WEB 2.0 ERA
          </h2>
          <div className="bg-white rounded-2xl shadow-2xl p-6 text-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl">👶</div>
              <div>
                <h3 className="font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Baby</h3>
                <p className="text-sm text-gray-500">@baby_builds</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Just shipped my first responsive website! 🚀 Mobile-first design, CSS gradients, and rounded corners everywhere. The future is now. #Web2.0 #Responsive #FlatDesign
            </p>
            <div className="flex gap-4 text-sm text-gray-400">
              <span>❤️ 1,337</span><span>🔁 42</span><span>💬 7</span>
            </div>
          </div>
        </div>
      </section>

      {/* ERA 4: 2026 NOW */}
      <section className="relative z-10 py-16 px-4 era-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8 neon-glow-pink" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(0.7rem, 2vw, 1rem)", color: "#ff6ec7" }}>
            🚀 ERA 4: 2026 — RIGHT NOW
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Baby grew up. Now Baby builds with <span className="text-[#00ffff]">Next.js</span>, <span className="text-[#39ff14]">TypeScript</span>, and <span className="text-[#ff6ec7]">AI</span>. But Baby never forgot where it all started.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: "⚛️", label: "Next.js 16" },
              { icon: "🔷", label: "TypeScript" },
              { icon: "🎨", label: "Tailwind CSS" },
              { icon: "🔊", label: "Web Audio" },
            ].map((tech) => (
              <div key={tech.label} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#ff6ec7] hover:bg-white/10 transition-all duration-300">
                <span className="text-2xl block mb-2">{tech.icon}</span>
                <span className="text-sm text-gray-300 font-mono">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRAPHIFY + GUESTBOOK + FOOTER */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto"><GraphifySection /></div>
      </section>

      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8 text-[#ffff00]" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(0.7rem, 2vw, 1rem)" }}>
            📖 THE GUESTBOOK
          </h2>
          <Guestbook onSuccess={playSuccess} />
        </div>
      </section>

      <footer className="relative z-10 py-8 px-4 border-t border-[#333]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4"><span className="text-2xl">👶</span></div>
          <p className="font-mono text-sm text-gray-400 mb-2">
            Built with 💖 for the{" "}
            <a href="https://hax.baby/first-website" target="_blank" rel="noopener noreferrer" className="text-[#ff6ec7] hover:underline">haX.baby</a>{" "}
            Baby&apos;s First Website Hackathon
          </p>
          <p className="font-mono text-xs text-gray-600 mb-4">Oct 17-19, 2026 | 48 hours of pure nostalgia</p>
          <div className="flex justify-center gap-4 text-xs font-mono text-gray-500">
            <span>🏗️ Built during the hackathon</span><span>•</span><span>📱 Mobile friendly</span><span>•</span><span>🔊 Sound enabled</span>
          </div>
          <div className="mt-4 text-xs font-mono text-gray-600">
            <a href="https://github.com/Graphify-Labs/graphify" target="_blank" rel="noopener noreferrer" className="text-[#9b59b6] hover:text-[#00ffff] transition-colors">Knowledge graph powered by Graphify</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
