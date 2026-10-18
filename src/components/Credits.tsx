const CREDITS = [
  {
    label: "Pip — character & official art",
    body: "Pip, his canon and the studio renders (portrait, cloud, music box, lantern) come from the free official Track 1 asset pack of the hackathon.",
    link: { text: "haX.baby official brief", href: "https://hax.baby/baby-problem" },
  },
  {
    label: "Fonts",
    body: "Press Start 2P, VT323, Comic Neue and Space Grotesk — served by Google Fonts.",
    link: { text: "fonts.google.com", href: "https://fonts.google.com" },
  },
  {
    label: "Sounds & music",
    body: "Every sound — dial-up modem, clicks, rattles, giggles, chimes and the generative lullaby — is synthesized live with the Web Audio API. Original compositions, zero audio files.",
    link: null,
  },
  {
    label: "Stack",
    body: "Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · hand-written CSS & SVG. No UI libraries.",
    link: { text: "nextjs.org", href: "https://nextjs.org" },
  },
  {
    label: "Inspiration",
    body: "The knowledge-graph section visualizes this site's own component tree, inspired by Graphify.",
    link: { text: "github.com/Graphify-Labs/graphify", href: "https://github.com/Graphify-Labs/graphify" },
  },
  {
    label: "Hackathon & AI policy",
    body: "Built during Baby's First Website (haX.baby, Oct 17–19 2026). AI tools were used as a pair programmer — 100% allowed by the brief; the human builder is the master architect of the code shipped.",
    link: { text: "hax.baby/first-website", href: "https://hax.baby/first-website" },
  },
];

export default function Credits() {
  return (
    <section id="credits" className="relative z-10 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-center mb-8"
          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(0.7rem, 2vw, 1rem)", color: "#9b59b6" }}
        >
          🎨 CREDITS &amp; THANKS
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CREDITS.map((c) => (
            <div
              key={c.label}
              className="bg-black/60 border border-[#9b59b6]/40 rounded-lg p-4 hover:border-[#00ffff] transition-colors"
            >
              <h3 className="font-mono text-[#ff6ec7] text-xs tracking-widest uppercase mb-2">{c.label}</h3>
              <p className="font-mono text-[12px] text-gray-300 leading-relaxed">{c.body}</p>
              {c.link && (
                <a
                  href={c.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[11px] font-mono text-[#00ffff] hover:text-[#ffff00] underline"
                >
                  {c.link.text} ↗
                </a>
              )}
            </div>
          ))}
        </div>
        <p className="text-center font-mono text-[10px] text-gray-600 mt-6">
          Pip artwork © haX.baby — provided free for builders of this hackathon. Made with 💖 + Red Bull + dial-up memories.
        </p>
      </div>
    </section>
  );
}