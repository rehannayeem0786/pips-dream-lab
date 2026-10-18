const PIECES: { g: string; c: string; x: number; t: number; d: number; s: number }[] = [
  { g: "★", c: "#f7d9a0", x: 5, t: 26, d: -3, s: 16 },
  { g: "☾", c: "#f7b7c8", x: 14, t: 32, d: -18, s: 20 },
  { g: "♡", c: "#c9b8f0", x: 23, t: 24, d: -7, s: 14 },
  { g: "✦", c: "#a8e6e3", x: 31, t: 30, d: -22, s: 15 },
  { g: "✿", c: "#f7d9a0", x: 40, t: 27, d: -12, s: 17 },
  { g: "★", c: "#f7b7c8", x: 48, t: 34, d: -2, s: 13 },
  { g: "✧", c: "#fbf4e9", x: 57, t: 25, d: -15, s: 16 },
  { g: "☾", c: "#c9b8f0", x: 65, t: 31, d: -9, s: 19 },
  { g: "♡", c: "#f7d9a0", x: 73, t: 28, d: -24, s: 14 },
  { g: "✦", c: "#f7b7c8", x: 82, t: 33, d: -5, s: 15 },
  { g: "★", c: "#a8e6e3", x: 90, t: 26, d: -19, s: 17 },
  { g: "✿", c: "#c9b8f0", x: 96, t: 30, d: -11, s: 14 },
  { g: "✧", c: "#f7d9a0", x: 18, t: 35, d: -27, s: 12 },
  { g: "☾", c: "#fbf4e9", x: 60, t: 29, d: -14, s: 15 },
  { g: "♡", c: "#f7b7c8", x: 86, t: 27, d: -30, s: 13 },
  { g: "★", c: "#c9b8f0", x: 36, t: 32, d: -21, s: 15 },
];

export default function CuteAmbient() {
  return (
    <div className="fixed inset-0 z-[1] overflow-hidden pointer-events-none" aria-hidden="true">
      {PIECES.map((p, i) => (
        <span
          key={i}
          className="cute-drift"
          style={{
            left: `${p.x}%`,
            color: p.c,
            fontSize: p.s,
            animationDuration: `${p.t}s`,
            animationDelay: `${p.d}s`,
          }}
        >
          {p.g}
        </span>
      ))}
    </div>
  );
}