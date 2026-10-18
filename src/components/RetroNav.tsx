"use client";

import { useState } from "react";

const ERAS = [
  { id: "era-1995", label: "1995", icon: "📼" },
  { id: "era-2005", label: "2005", icon: "💿" },
  { id: "era-2012", label: "2012", icon: "📱" },
  { id: "era-2026", label: "2026", icon: "🚀" },
];

export default function RetroNav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9990] bg-[#c0c0c0] border-b-2 border-[#808080] shadow-lg">
      <div className="flex items-center justify-between px-2 py-1">
        {/* Browser chrome look */}
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
        </div>

        {/* URL bar */}
        <div className="flex-1 mx-3 bg-white border border-[#808080] px-2 py-0.5 text-xs font-mono text-black truncate hidden sm:block">
          http://www.babys-first-website.geocities.com/~baby/index.html
        </div>

        {/* Era navigation */}
        <div className="flex items-center gap-1">
          {ERAS.map((era) => (
            <button
              key={era.id}
              onClick={() => scrollTo(era.id)}
              className="px-2 py-1 bg-[#c0c0c0] border border-[#808080] text-xs font-mono text-black hover:bg-[#e0e0e0] active:border-[#404040] transition-colors cursor-pointer hidden md:block"
              title={`Jump to ${era.label}`}
            >
              {era.icon} {era.label}
            </button>
          ))}
          {/* Mobile menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-2 py-1 bg-[#c0c0c0] border border-[#808080] text-xs font-mono text-black md:hidden cursor-pointer"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#c0c0c0] border-t border-[#808080] p-2">
          {ERAS.map((era) => (
            <button
              key={era.id}
              onClick={() => scrollTo(era.id)}
              className="block w-full text-left px-3 py-2 text-sm font-mono text-black hover:bg-[#e0e0e0] transition-colors cursor-pointer"
            >
              {era.icon} Era {era.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}