import LullabyLab from "@/components/LullabyLab";
import Nightlights from "@/components/Nightlights";
import GrowthChart from "@/components/GrowthChart";
import DreamGame from "@/components/DreamGame";

function ProjectHeader({ n, title, tag }: { n: number; title: string; tag: string }) {
  return (
    <div className="flex items-center gap-3 mb-3 mt-10 first:mt-0">
      <span
        className="shrink-0 w-9 h-9 flex items-center justify-center bg-[#ff6ec7] text-black font-bold"
        style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.7rem" }}
      >
        {n}
      </span>
      <div>
        <h3
          className="text-[#ffff00]"
          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(0.6rem, 1.8vw, 0.8rem)" }}
        >
          {title}
        </h3>
        <span className="font-mono text-[11px] text-gray-500">{tag}</span>
      </div>
    </div>
  );
}

export default function PipWork() {
  return (
    <section id="work" className="relative z-10 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-center mb-3"
          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(0.7rem, 2vw, 1rem)", color: "#39ff14" }}
        >
          🌙 WHAT I DO
        </h2>
        <p className="text-center font-mono text-sm text-gray-300 mb-10 max-w-2xl mx-auto">
          Junior Dream Engineer at the Midnight Nursery — I design the dreams, lullabies, nightlights and
          bedtime stories that help little creatures fall asleep. My work ↓
        </p>

        <ProjectHeader n={1} title="THE LULLABY LAB" tag="generative music box · web audio · click it" />
        <LullabyLab />

        <ProjectHeader n={2} title="NIGHTLIGHT COLLECTION" tag="lamps pip designed · click to glow" />
        <Nightlights />

        <ProjectHeader n={3} title="PIP'S GROWTH CHART" tag="skills as a baby height chart" />
        <GrowthChart />

        <ProjectHeader n={4} title="DREAM DELIVERY" tag="mini-game · catch the falling dreams · touch + keys" />
        <DreamGame />
      </div>
    </section>
  );
}