import Image from "next/image";
import Link from "next/link";

const PROFILE: [string, string][] = [
  ["Name", "Pip"],
  ["Age", "a baby (ageless, timeless, always sleepy)"],
  ["Face", "smooth round skull · huge cozy eye sockets with glowing pinpricks · tiny crooked smile"],
  ["Outfit", "bedtime nightcap with stars + a little pink bow"],
  ["Job", "Junior Dream Engineer at the Midnight Nursery"],
  ["Hates", "silence (so this site is never quiet 🔊)"],
  ["Loves", "giggles · naps · nightlights · old webpages"],
  ["Personality", "curious · sleepy · a little clumsy · easily delighted"],
];

const PILLARS = [
  { title: "WHAT I AM", href: "#about", icon: "👶", note: "identity, look & quirks" },
  { title: "WHAT I DO", href: "#work", icon: "🌙", note: "dreams I engineer" },
  { title: "MY STORY", href: "#story", icon: "📖", note: "how I got here" },
];

export default function AboutPip() {
  return (
    <section id="about" className="relative z-10 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-center mb-8 rainbow-text"
          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(0.7rem, 2vw, 1rem)" }}
        >
          👤 WHO AM I?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* GeoCities polaroid portrait */}
          <figure className="bg-white p-3 pb-5 rotate-[-2deg] shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:rotate-0 transition-transform duration-300">
            <div className="relative w-full aspect-[3/4] bg-[#16162e]">
              <Image
                src="/pip/pip_portrait.png"
                alt="Official Pip studio portrait — full-body reference of the skull baby holding a nightlight lantern"
                fill
                sizes="(max-width: 768px) 90vw, 380px"
                className="object-contain"
              />
            </div>
            <figcaption
              className="text-center mt-3 text-black text-sm"
              style={{ fontFamily: "'Comic Neue', cursive", fontWeight: 700 }}
            >
              Pip, off-duty at the nursery ✨
            </figcaption>
          </figure>

          {/* Retro profile card */}
          <div className="pixel-border bg-black/70 p-4 md:p-5 overflow-x-auto">
            <table className="w-full font-mono text-[13px] md:text-sm border-collapse">
              <tbody>
                {PROFILE.map(([k, v]) => (
                  <tr key={k} className="border-b border-[#333] last:border-0">
                    <td className="py-2 pr-3 text-[#ff6ec7] whitespace-nowrap align-top font-bold">{k}:</td>
                    <td className="py-2 text-[#39ff14]">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <blockquote
          className="mt-8 text-center text-[#ffff00] neon-glow-cyan"
          style={{ fontFamily: "'VT323', monospace", fontSize: "clamp(1.3rem, 3.5vw, 2rem)" }}
        >
          &quot;I build the dreams you fall asleep inside.&quot;
        </blockquote>

        {/* The brief's three core things — as big friendly jumps */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PILLARS.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-[#ff6ec7] hover:bg-white/10 transition-all"
            >
              <span className="text-3xl block mb-1 group-hover:scale-110 transition-transform">{p.icon}</span>
              <span className="block font-mono text-[#00ffff] text-xs tracking-widest">{p.title}</span>
              <span className="block font-mono text-[10px] text-gray-400 mt-1">{p.note}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}