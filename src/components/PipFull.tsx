export default function PipFull({ className = "w-64 h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 200"
      className={className}
      role="img"
      aria-label="Pip the skull baby sitting on a cloud and waving hello"
    >
      {/* sleeping moon buddy */}
      <g className="pip-moon">
        <path d="M196 22 a17 17 0 1 0 0 34 a13.5 13.5 0 1 1 0 -34" fill="#f7d9a0" />
        <path d="M186 38 q3 2.4 6 0" stroke="#c99a4b" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <text x="204" y="18" fontSize="11" fill="#c9b8f0" fontFamily="monospace">z</text>
        <text x="212" y="10" fontSize="8" fill="#c9b8f0" fontFamily="monospace">z</text>
      </g>
      {/* scattered stars */}
      <path d="M30 40 l2 4.6 4.6 2 -4.6 2 -2 4.6 -2 -4.6 -4.6 -2 4.6 -2z" fill="#f7d9a0" />
      <path d="M196 92 l1.7 3.9 3.9 1.7 -3.9 1.7 -1.7 3.9 -1.7 -3.9 -3.9 -1.7 3.9 -1.7z" fill="#c9b8f0" />
      <path d="M22 108 l1.5 3.4 3.4 1.5 -3.4 1.5 -1.5 3.4 -1.5 -3.4 -3.4 -1.5 3.4 -1.5z" fill="#f8bcca" />
      <path d="M182 132 l1.5 3.4 3.4 1.5 -3.4 1.5 -1.5 3.4 -1.5 -3.4 -3.4 -1.5 3.4 -1.5z" fill="#f7d9a0" />
      {/* fluffy cloud seat */}
      <g fill="#ffffff">
        <ellipse cx="62" cy="168" rx="30" ry="18" />
        <ellipse cx="110" cy="176" rx="42" ry="22" />
        <ellipse cx="158" cy="168" rx="30" ry="18" />
        <ellipse cx="86" cy="182" rx="32" ry="16" />
        <ellipse cx="134" cy="182" rx="32" ry="16" />
      </g>
      {/* legs + pink foot pads */}
      <ellipse cx="94" cy="158" rx="11" ry="9" fill="#f6ead8" />
      <ellipse cx="126" cy="158" rx="11" ry="9" fill="#f6ead8" />
      <ellipse cx="92" cy="160" rx="5.5" ry="4" fill="#f2b9c8" />
      <ellipse cx="128" cy="160" rx="5.5" ry="4" fill="#f2b9c8" />
      {/* romper body with tiny hearts */}
      <ellipse cx="110" cy="136" rx="31" ry="27" fill="#f6ead8" />
      <path d="M100 128 l1.6 3.4 3.4 1.6 -3.4 1.6 -1.6 3.4 -1.6 -3.4 -3.4 -1.6 3.4 -1.6z" fill="#f2b9c8" opacity="0.8" />
      <path d="M120 140 l1.4 3 3 1.4 -3 1.4 -1.4 3 -1.4 -3 -3 -1.4 3 -1.4z" fill="#f2b9c8" opacity="0.8" />
      <path d="M106 150 l1.2 2.6 2.6 1.2 -2.6 1.2 -1.2 2.6 -1.2 -2.6 -2.6 -1.2 2.6 -1.2z" fill="#f2b9c8" opacity="0.8" />
      {/* resting arm */}
      <path d="M84 128 C78 136 78 144 84 150" stroke="#f6ead8" strokeWidth="11" strokeLinecap="round" fill="none" />
      {/* waving arm */}
      <g className="pip-wave">
        <path d="M132 130 C142 122 148 112 151 103" stroke="#f6ead8" strokeWidth="11" strokeLinecap="round" fill="none" />
        <circle cx="152" cy="100" r="7.5" fill="#fdf7ee" />
      </g>
      {/* head */}
      <ellipse cx="110" cy="76" rx="38" ry="34" fill="#fdf7ee" />
      {/* blush */}
      <ellipse cx="80" cy="88" rx="8.5" ry="5" fill="#f8bcca" opacity="0.9" />
      <ellipse cx="140" cy="88" rx="8.5" ry="5" fill="#f8bcca" opacity="0.9" />
      {/* sparkly amber eyes (blink group) */}
      <g className="pip-eyes">
        <ellipse cx="96" cy="74" rx="13" ry="14" fill="#4e3b32" />
        <ellipse cx="124" cy="74" rx="13" ry="14" fill="#4e3b32" />
        <circle cx="96" cy="75.5" r="6" fill="#ffcf6e" />
        <circle cx="124" cy="75.5" r="6" fill="#ffcf6e" />
        <circle cx="96" cy="75.5" r="2.7" fill="#ffe9ad" />
        <circle cx="124" cy="75.5" r="2.7" fill="#ffe9ad" />
        <circle cx="94" cy="73" r="1.9" fill="#ffffff" />
        <circle cx="122" cy="73" r="1.9" fill="#ffffff" />
        <circle cx="98" cy="78" r="1" fill="#ffffff" opacity="0.85" />
        <circle cx="126" cy="78" r="1" fill="#ffffff" opacity="0.85" />
      </g>
      {/* tiny smile */}
      <path d="M105 90 Q110 95 115 90" stroke="#4e3b32" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      {/* nightcap */}
      <rect x="72" y="42" width="76" height="14" rx="7" fill="#f3e9d7" />
      <path d="M80 46 C80 18 140 18 140 46 Z" fill="#faf3e6" />
      <path d="M110 24 l2 4.6 4.6 2 -4.6 2 -2 4.6 -2 -4.6 -4.6 -2 4.6 -2z" fill="#e9b949" />
      <path d="M93 32 l1.6 3.6 3.6 1.6 -3.6 1.6 -1.6 3.6 -1.6 -3.6 -3.6 -1.6 3.6 -1.6z" fill="#e9b949" />
      <path d="M127 32 l1.6 3.6 3.6 1.6 -3.6 1.6 -1.6 3.6 -1.6 -3.6 -3.6 -1.6 3.6 -1.6z" fill="#e9b949" />
      <path d="M88 32 C74 28 68 18 70 10" stroke="#faf3e6" strokeWidth="10" strokeLinecap="round" fill="none" />
      <circle cx="69" cy="9" r="7" fill="#f3e9d7" />
      {/* pink bow */}
      <path d="M146 50 l11 -7 v14 z" fill="#f8bcca" />
      <path d="M146 50 l11 7 v-14 z" fill="#f2a3bd" />
      <circle cx="146" cy="50" r="3.8" fill="#ef7fa6" />
    </svg>
  );
}