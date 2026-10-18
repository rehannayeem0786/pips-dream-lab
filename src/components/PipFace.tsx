export default function PipFace({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" className={className} role="img" aria-label="Pip the skull baby">
      {/* round skull head */}
      <ellipse cx="48" cy="60" rx="33" ry="30" fill="#fbf4e9" />
      {/* blush cheeks */}
      <ellipse cx="23" cy="70" rx="6.5" ry="4" fill="#f7b7c8" opacity="0.85" />
      <ellipse cx="73" cy="70" rx="6.5" ry="4" fill="#f7b7c8" opacity="0.85" />
      {/* cozy eye sockets */}
      <ellipse cx="36" cy="58" rx="11.5" ry="12.5" fill="#37334e" />
      <ellipse cx="60" cy="58" rx="11.5" ry="12.5" fill="#37334e" />
      {/* glowing pinpricks of light */}
      <circle cx="36" cy="59" r="3.4" fill="#ffd873" />
      <circle cx="60" cy="59" r="3.4" fill="#ffd873" />
      <circle cx="37.2" cy="57.6" r="1.1" fill="#fff8e7" />
      <circle cx="61.2" cy="57.6" r="1.1" fill="#fff8e7" />
      {/* tiny crooked smile */}
      <path d="M43 75 Q48 80 54 74" stroke="#37334e" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      {/* nightcap brim */}
      <rect x="12" y="34" width="72" height="13" rx="6.5" fill="#efe2cb" />
      {/* nightcap dome */}
      <path d="M20 38 C20 14 76 14 76 38 Z" fill="#f6eddd" />
      {/* stars on the cap */}
      <path d="M48 19 l1.8 4.2 4.2 1.8 -4.2 1.8 -1.8 4.2 -1.8 -4.2 -4.2 -1.8 4.2 -1.8z" fill="#e9b949" />
      <path d="M33 27 l1.4 3.2 3.2 1.4 -3.2 1.4 -1.4 3.2 -1.4 -3.2 -3.2 -1.4 3.2 -1.4z" fill="#e9b949" />
      <path d="M64 27 l1.4 3.2 3.2 1.4 -3.2 1.4 -1.4 3.2 -1.4 -3.2 -3.2 -1.4 3.2 -1.4z" fill="#e9b949" />
      {/* floppy tip + pom */}
      <path d="M28 26 C16 22 10 14 12 8" stroke="#f6eddd" strokeWidth="9" strokeLinecap="round" fill="none" />
      <circle cx="11" cy="7" r="7" fill="#f6eddd" />
      {/* little pink bow */}
      <path d="M77 43 l10 -6.5 v13 z" fill="#f7b7c8" />
      <path d="M77 43 l10 6.5 v-13 z" fill="#f2a3bd" />
      <circle cx="77" cy="43" r="3.4" fill="#ef7fa6" />
    </svg>
  );
}