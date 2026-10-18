"use client";

export default function WebRing() {
  return (
    <div className="border-2 border-[#333] bg-black/60 p-4 text-center">
      <p className="font-mono text-xs text-gray-400 mb-3 uppercase tracking-widest">
        ← This site is part of the haX.baby WebRing →
      </p>
      <div className="flex justify-center items-center gap-4">
        <span className="text-[#ff6ec7] font-mono text-sm cursor-pointer hover:text-[#00ffff] transition-colors">
          ◀◀ Prev
        </span>
        <span className="text-[#ffff00] font-mono text-sm">|</span>
        <span className="text-[#39ff14] font-mono text-sm cursor-pointer hover:text-[#00ffff] transition-colors">
          Random 🎲
        </span>
        <span className="text-[#ffff00] font-mono text-sm">|</span>
        <span className="text-[#ff6ec7] font-mono text-sm cursor-pointer hover:text-[#00ffff] transition-colors">
          Next ▶▶
        </span>
      </div>
      <div className="mt-3 flex justify-center gap-3 flex-wrap">
        <span className="inline-block bg-black border border-[#39ff14] px-2 py-1 text-[10px] font-mono text-[#39ff14]">
          ✓ HTML 3.2 Validated
        </span>
        <span className="inline-block bg-black border border-[#ff6ec7] px-2 py-1 text-[10px] font-mono text-[#ff6ec7]">
          ✓ Best viewed 800×600
        </span>
        <span className="inline-block bg-black border border-[#00ffff] px-2 py-1 text-[10px] font-mono text-[#00ffff]">
          ✓ Netscape Now!
        </span>
        <span className="inline-block bg-black border border-[#ffff00] px-2 py-1 text-[10px] font-mono text-[#ffff00]">
          ✓ Y2K Compliant
        </span>
      </div>
    </div>
  );
}