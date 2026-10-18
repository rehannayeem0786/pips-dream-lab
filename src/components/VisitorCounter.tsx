"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visitors")
      .then((r) => r.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(1337));
  }, []);

  if (count === null) {
    return (
      <div className="inline-block bg-black border-2 border-[#39ff14] px-4 py-2 font-mono text-[#39ff14]">
        Loading...
      </div>
    );
  }

  const digits = count.toString().padStart(6, "0").split("");

  return (
    <div className="inline-flex flex-col items-center gap-1">
      <div className="flex gap-[2px]">
        {digits.map((d, i) => (
          <span
            key={i}
            className="inline-block w-7 h-9 bg-black border border-[#39ff14] text-[#39ff14] font-mono text-lg flex items-center justify-center"
            style={{
              textShadow: "0 0 5px #39ff14",
              fontFamily: "'VT323', monospace",
            }}
          >
            {d}
          </span>
        ))}
      </div>
      <span className="text-[10px] text-gray-400 uppercase tracking-widest">
        dreams delivered · since 1996
      </span>
    </div>
  );
}