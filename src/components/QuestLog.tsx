const QUESTS = [
  { icon: "💌", name: "LIVE GUESTBOOK", pts: "+2", note: "visitors sign the wall" },
  { icon: "✨", name: "SPARKLE CURSOR TRAIL", pts: "+2", note: "glitter pointer motion" },
  { icon: "🔢", name: "HIT COUNTER ODOMETER", pts: "+1", note: "vintage visitor ticks" },
  { icon: "🔊", name: "CLICK SOUNDS + MUTE", pts: "+3", note: "retro chimes, easy mute" },
  { icon: "🌀", name: "RESPONSIVE CHAOS MODE", pts: "+5", note: "glorious on any screen" },
];

export default function QuestLog() {
  return (
    <section
      aria-label="Side quest log"
      className="max-w-2xl mx-auto mt-10 border-2 border-dashed border-[#39ff14] bg-black/60 p-4 font-mono text-xs sm:text-sm"
    >
      <h3 className="text-[#39ff14] text-center mb-3 tracking-widest">
        ★ SIDE QUEST LOG — haX.baby official quests ★
      </h3>
      <ul className="space-y-1.5">
        {QUESTS.map((q) => (
          <li key={q.name} className="flex items-center gap-2 text-[#b8ffb8]">
            <span className="text-[#39ff14]" aria-hidden="true">
              [✓]
            </span>
            <span aria-hidden="true">{q.icon}</span>
            <span className="font-bold text-white">{q.name}</span>
            <span className="hidden sm:inline text-gray-400">— {q.note}</span>
            <span className="ml-auto text-[#ffd700]">{q.pts}</span>
          </li>
        ))}
      </ul>
      <p className="text-center mt-3 text-[#ffd700] font-bold">
        <span className="blink" aria-hidden="true">▮</span> +13 / +13 BONUS SECURED — all quests complete!{" "}
        <span className="blink" aria-hidden="true">▮</span>
      </p>
    </section>
  );
}