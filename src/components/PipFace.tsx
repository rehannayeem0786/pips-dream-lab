export default function PipFace({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" className={className} role="img" aria-label="Pip the skull baby">
      {/* round chubby skull */}
      <ellipse cx="48" cy="59" rx="34" ry="31" fill="#fdf7ee" />
      {/* rosy blush cheeks */}
      <ellipse cx="21.5" cy="69" rx="7.5" ry="4.6" fill="#f8bcca" opacity="0.9" />
      <ellipse cx="74.5" cy="69" rx="7.5" ry="4.6" fill="#f8bcca" opacity="0.9" />
      {/* big cozy sockets + glowing amber eyes (blink group) */}
      <g className="pip-eyes">
        <ellipse cx="35" cy="57" rx="12" ry="13" fill="#4e3b32" />
        <ellipse cx="61" cy="57" rx="12" ry="13" fill="#4e3b32" />
        <circle cx="35" cy="58.5" r="5.4" fill="#ffcf6e" />
        <circle cx="61" cy="58.5" r="5.4" fill="#ffcf6e" />
        <circle cx="35" cy="58.5" r="2.4" fill="#ffe9ad" />
        <circle cx="61" cy="58.5" r="2.4" fill="#ffe9ad" />
        <circle cx="33.2" cy="56.2" r="1.7" fill="#ffffff" />
        <circle cx="59.2" cy="56.2" r="1.7" fill="#ffffff" />
        <circle cx="36.8" cy="60.6" r="0.9" fill="#ffffff" opacity="0.85" />
        <circle cx="62.8" cy="60.6" r="0.9" fill="#ffffff" opacity="0.85" />
      </g>
      {/* tiny happy smile */}
      <path d="M44 72 Q48 76.5 52 72" stroke="#4e3b32" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      {/* nightcap brim */}
      <rect x="13" y="32" width="70" height="13" rx="6.5" fill="#f3e9d7" />
      {/* nightcap dome */}
      <path d="M21 36 C21 12 75 12 75 36 Z" fill="#faf3e6" />
      {/* gold stars on the cap */}
      <path d="M48 17 l1.8 4.2 4.2 1.8 -4.2 1.8 -1.8 4.2 -1.8 -4.2 -4.2 -1.8 4.2 -1.8z" fill="#e9b949" />
      <path d="M33 25 l1.4 3.2 3.2 1.4 -3.2 1.4 -1.4 3.2 -1.4 -3.2 -3.2 -1.4 3.2 -1.4z" fill="#e9b949" />
      <path d="M64 25 l1.4 3.2 3.2 1.4 -3.2 1.4 -1.4 3.2 -1.4 -3.2 -3.2 -1.4 3.2 -1.4z" fill="#e9b949" />
      {/* floppy tip + pom */}
      <path d="M29 24 C17 20 11 12 13 6" stroke="#faf3e6" strokeWidth="9" strokeLinecap="round" fill="none" />
      <circle cx="12.5" cy="6" r="6.5" fill="#f3e9d7" />
      {/* little pink bow */}
      <path d="M77 41 l10 -6.5 v13 z" fill="#f8bcca" />
      <path d="M77 41 l10 6.5 v-13 z" fill="#f2a3bd" />
      <circle cx="77" cy="41" r="3.4" fill="#ef7fa6" />
    </svg>
  );
}