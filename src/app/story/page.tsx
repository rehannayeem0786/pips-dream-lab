import Link from "next/link";

export const metadata = {
  title: "The Story Behind the Build | Pip — Junior Dream Engineer",
  description:
    "Why we built Pip's dream lab: a retro-90s character portfolio for the haX.baby Baby's First Website hackathon.",
};

export default function StoryPage() {
  return (
    <main className="relative z-10 min-h-screen px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-8 font-mono text-sm text-[#00ffff] hover:text-[#ff6ec7] transition-colors"
        >
          ← Back to the Midnight Nursery
        </Link>

        <h1
          className="mb-2 text-[#ff6ec7] neon-glow-pink"
          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(0.9rem, 3vw, 1.4rem)" }}
        >
          📜 THE STORY BEHIND THE BUILD
        </h1>
        <p className="text-[#ffff00] font-mono text-sm mb-8">
          Baby&apos;s First Website · haX.baby · Oct 17–19, 2026 · Track 1 — Same Baby, 1,000 Websites
        </p>

        <div className="pixel-border bg-black/70 p-6 md:p-8 space-y-6 font-mono text-[#39ff14] leading-relaxed text-[15px]">
          <section>
            <h2 className="text-[#00ffff] mb-2 text-lg">01 · THE CHARACTER</h2>
            <p>
              Meet <b className="text-white">Pip</b> — a baby with a smooth round skull face, huge cozy eye
              sockets with tiny glowing pinpricks of light, a crooked smile, and a starred nightcap with a
              pink bow. He is a <b className="text-white">Junior Dream Engineer at the Midnight Nursery</b>,
              where he designs the dreams, lullabies, nightlights, and bedtime stories that help the
              neighbourhood&apos;s little creatures fall asleep. His motto:{" "}
              <i className="text-[#ff6ec7]">&quot;I build the dreams you fall asleep inside.&quot;</i>
              Curious, sleepy, a little clumsy, and he giggles at everything — Pip hates silence, so this
              site is never quiet (unless you hit the big pink mute button 🔇).
            </p>
          </section>

          <section>
            <h2 className="text-[#00ffff] mb-2 text-lg">02 · THE IDEA</h2>
            <p>
              The brief said: build a portfolio for a character, with early-web soul. So we asked —{" "}
              <i>what would the old web look like if a dream engineer built it?</i> Pip dreams in GeoCities:
              construction bars, visitor odometers, marquees, guestbooks, and dial-up chimes. Every scroll
              is a dream he engineered. the site itself IS his portfolio — his Lullaby Lab plays real
              generative music, his Nightlight Collection glows under your cursor, and his Dream Journal
              (guestbook) collects wishes from everyone who visits the nursery.
            </p>
          </section>
          <section>
            <h2 className="text-[#00ffff] mb-2 text-lg">03 · PROUDEST FEATURES</h2>
            <ul className="space-y-2 list-disc list-inside text-[#39ff14]">
              <li>
                <b className="text-white">Sleep-to-wake easter egg</b> — Pip naps in the hero. Click him and
                he wakes up with a giggle. (The organizers&apos; tip: &quot;a sleeping character you can
                wake is pure joy.&quot;)
              </li>
              <li>
                <b className="text-white">The Lullaby Lab</b> — a generative Web Audio music box with five
                evolving pentatonic phrases. No audio files: every note is synthesized in the browser.
              </li>
              <li>
                <b className="text-white">Sound design + instant mute</b> — dial-up modem on boot, rattle
                clicks, success chimes, hover blips — all synthesized live via Web Audio API, with a
                visible mute toggle that persists your choice.
              </li>
              <li>
                <b className="text-white">Dream Journal guestbook</b> — persists to a real backend API with
                a graceful local fallback, and it <i>remembers you</i> on your next visit.
              </li>
              <li>
                <b className="text-white">Sparkle cursor trail + starfield + Konami code</b> — the secret
                code unlocks Pip&apos;s secret lullaby.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#00ffff] mb-2 text-lg">04 · HOW IT WORKS</h2>
            <p>
              Next.js 16 + React 19 + TypeScript + Tailwind CSS 4, zero UI libraries — every retro pixel is
              hand-written CSS and SVG. The knowledge graph section visualizes the site&apos;s own
              component tree. Built entirely inside the 48-hour sprint with AI as a pair programmer; the
              architecture, copy, and creative direction were designed and verified by the human builder.
            </p>
          </section>

          <section>
            <h2 className="text-[#00ffff] mb-2 text-lg">05 · CREDITS</h2>
            <p>
              Pip official art &amp; canon:{" "}
              <a href="https://hax.baby/baby-problem" target="_blank" rel="noopener noreferrer" className="text-[#ff6ec7] underline">
                haX.baby official brief
              </a>{" "}
              (free Track 1 asset pack) · Fonts: Google Fonts (Press Start 2P, VT323, Comic Neue, Space
              Grotesk) · Sounds: original Web Audio synthesis · Graph section inspired by{" "}
              <a href="https://github.com/Graphify-Labs/graphify" target="_blank" rel="noopener noreferrer" className="text-[#9b59b6] underline">
                Graphify
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="btn-cute inline-block px-6 py-3 bg-[#ff6ec7] text-black font-bold font-mono hover:bg-[#00ffff] transition-colors"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.7rem" }}
          >
            ← GO VISIT PIP
          </Link>
        </div>
      </div>
    </main>
  );
}