const SCENES = [
  {
    icon: "🌠",
    title: "ORIGIN",
    text: "I was born from a fallen nightlight's last wish and a cracked music box nobody threw away. The Nursery stitched me from starlight, felt, and one very stubborn giggle.",
  },
  {
    icon: "🏚️",
    title: "WHERE I LIVE",
    text: "The Midnight Nursery, above the sleeping town. My favourite dreams are built like the old web: guestbooks, marquees, visitor counters, dial-up chimes. Cozy beats sleek.",
  },
  {
    icon: "🚀",
    title: "WHERE I'M GOING",
    text: "Saving up for one dream so cozy nobody wants to wake up. Until then: click things, sign my journal, and never, ever let the page stay silent.",
  },
];

export default function PipStory() {
  return (
    <section
      id="story"
      className="relative z-10 py-16 px-4 bg-gradient-to-b from-transparent via-[#100b2a]/60 to-transparent"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-center mb-4"
          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(0.7rem, 2vw, 1rem)", color: "#00ffff" }}
        >
          📖 MY STORY
        </h2>
        <p className="text-center text-gray-300 font-mono text-sm mb-8 max-w-2xl mx-auto">
          How I came to be, where I live, where I&apos;m going — three little scenes. Short on purpose:
          motion &gt; walls of text.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {SCENES.map((s, i) => (
            <article
              key={s.title}
              className="relative bg-black/50 border border-[#333] rounded-xl p-5 hover:border-[#ff6ec7] hover:bg-black/70 transition-all duration-300"
            >
              <span className="text-3xl block mb-2 float" aria-hidden="true">
                {s.icon}
              </span>
              <span className="block font-mono text-[#ffff00] text-[11px] tracking-[0.2em] mb-2">
                SCENE {i + 1} · {s.title}
              </span>
              <p className="font-mono text-[13px] leading-relaxed text-[#39ff14]">{s.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 border-t-2 border-dashed border-[#333] pt-4 text-center">
          <p className="font-mono text-xs text-gray-500">
            ← WHO I AM · THE DREAMS I BUILD ARE UPSTAIRS ↑ · THE JOURNAL IS DOWNSTAIRS ↓ →
          </p>
        </div>
      </div>
    </section>
  );
}