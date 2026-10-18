"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { useSound } from "@/components/SoundManager";

const W = 360;
const H = 440;
const GLYPHS = ["⭐", "💤", "🌙", "✨"];
type Faller = { x: number; y: number; vy: number; g: number; r: number };

function drawScene(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "#0a0a20";
  ctx.fillRect(0, 0, W, H);
  ctx.font = "11px serif";
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  for (let i = 0; i < 14; i++) ctx.fillText(i % 2 ? "·" : "✦", 18 + i * 24, 30 + ((i * 61) % 300));
  const bx = W / 2;
  ctx.fillStyle = "#f5f0e6";
  ctx.beginPath();
  ctx.arc(bx - 24, H - 52, 17, 0, Math.PI * 2);
  ctx.arc(bx, H - 60, 23, 0, Math.PI * 2);
  ctx.arc(bx + 24, H - 52, 17, 0, Math.PI * 2);
  ctx.ellipse(bx, H - 46, 44, 15, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#16162e";
  ctx.beginPath();
  ctx.arc(bx - 7, H - 55, 2.4, 0, Math.PI * 2);
  ctx.arc(bx + 7, H - 55, 2.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#16162e";
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.arc(bx, H - 51, 5, 0.15 * Math.PI, 0.85 * Math.PI);
  ctx.stroke();
}

export default function DreamGame() {
  const { playHover, playGiggle, playRattle } = useSound();
  const [status, setStatus] = useState<"idle" | "playing" | "over">("idle");
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [best, setBest] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fallersRef = useRef<Faller[]>([]);
  const basketRef = useRef(W / 2);
  const scoreRef = useRef(0);
  const missesRef = useRef(0);

  useEffect(() => {
    let cancelled = false;
    const t = setTimeout(() => {
      if (cancelled) return;
      try { setBest(parseInt(localStorage.getItem("pip-best") || "0", 10) || 0); } catch { /* ignore */ }
    }, 0);
    return () => { cancelled = true; clearTimeout(t); };
  }, []);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c?.getContext("2d");
    if (ctx) drawScene(ctx);
  }, [status]);

  useEffect(() => {
    if (status !== "playing") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") { basketRef.current = Math.max(30, basketRef.current - 26); e.preventDefault(); }
      if (e.key === "ArrowRight") { basketRef.current = Math.min(W - 30, basketRef.current + 26); e.preventDefault(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [status]);

  useEffect(() => {
    if (status !== "playing") return;
    const c = canvasRef.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;
    let raf = 0;
    let last = performance.now();
    let nextSpawn = last + 600;
    let over = false;
    const loop = (t: number) => {
      if (over) return;
      const dt = Math.min(48, t - last) / 16.67;
      last = t;
      drawScene(ctx);
      if (t > nextSpawn) {
        nextSpawn = t + Math.max(360, 760 - scoreRef.current * 12);
        fallersRef.current.push({
          x: 24 + Math.random() * (W - 48),
          y: -18,
          vy: 1.3 + Math.random() + scoreRef.current * 0.05,
          g: Math.floor(Math.random() * GLYPHS.length),
          r: Math.random() * Math.PI,
        });
      }
      const catchY = H - 64;
      const kept: Faller[] = [];
      for (const f of fallersRef.current) {
        f.y += f.vy * dt;
        f.r += 0.04 * dt;
        if (f.y > catchY - 12 && f.y < catchY + 40 && Math.abs(f.x - basketRef.current) < 44) {
          scoreRef.current += 1;
          setScore(scoreRef.current);
          playHover();
          if (scoreRef.current % 5 === 0) playRattle();
          continue;
        }
        if (f.y > H + 26) {
          missesRef.current += 1;
          setMisses(missesRef.current);
          if (missesRef.current >= 3) {
            over = true;
            setStatus("over");
            playGiggle();
            setBest((prev) => {
              const nb = Math.max(prev, scoreRef.current);
              try { localStorage.setItem("pip-best", String(nb)); } catch { /* ignore */ }
              return nb;
            });
            fallersRef.current = [];
            return;
          }
          continue;
        }
        kept.push(f);
      }
      fallersRef.current = kept;
      ctx.font = "20px serif";
      ctx.textAlign = "center";
      for (const f of fallersRef.current) {
        ctx.save();
        ctx.translate(f.x, f.y);
        ctx.rotate(Math.sin(f.r) * 0.5);
        ctx.fillText(GLYPHS[f.g], 0, 0);
        ctx.restore();
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [status, playHover, playRattle, playGiggle]);

  const moveBasket = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    if (status !== "playing") return;
    const rect = e.currentTarget.getBoundingClientRect();
    basketRef.current = Math.max(30, Math.min(W - 30, ((e.clientX - rect.left) / rect.width) * W));
  };

  const start = () => {
    fallersRef.current = [];
    scoreRef.current = 0;
    missesRef.current = 0;
    basketRef.current = W / 2;
    setScore(0);
    setMisses(0);
    setStatus("playing");
  };

  return (
    <div className="pixel-border bg-black/60 p-4">
      <div className="flex justify-between items-center font-mono text-xs md:text-sm mb-2 gap-2 flex-wrap">
        <span className="text-[#ffff00]">dreams caught: <b>{score}</b></span>
        <span aria-label={`${3 - Math.min(3, misses)} lives left`}>
          {"❤️".repeat(3 - Math.min(3, misses))}
          {"🖤".repeat(Math.min(3, misses))}
        </span>
        <span className="text-[#00ffff]">best: {best}</span>
      </div>
      <div className="relative mx-auto w-full max-w-[360px]">
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          onPointerMove={moveBasket}
          onPointerDown={moveBasket}
          aria-label="Catch the falling dreams mini-game"
          className="block w-full h-auto border border-[#333] touch-none cursor-pointer"
        />
        {status !== "playing" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/75 text-center p-4">
            <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.7rem", color: "#ff6ec7" }}>
              {status === "idle" ? "CATCH THE DREAMS" : `YOU CAUGHT ${score} DREAMS`}
            </p>
            <p className="font-mono text-xs text-gray-300 mt-3 mb-4 max-w-[270px]">
              {status === "idle"
                ? "Move the sleepy cloud with finger, mouse, or arrow keys. 3 drops and Pip yawns."
                : score >= best && score > 0
                  ? "🏆 NEW BEST! Pip is impressed."
                  : `best: ${best} — one more delivery?`}
            </p>
            <button
              onClick={start}
              className="btn-cute px-5 py-3 bg-[#39ff14] text-black font-bold hover:bg-[#00ffff] transition-colors cursor-pointer"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.65rem" }}
            >
              {status === "idle" ? "▶ START DELIVERY" : "↻ AGAIN"}
            </button>
          </div>
        )}
      </div>
      <p className="text-center font-mono text-[11px] text-gray-500 mt-2">
        touch-friendly · keyboard-friendly · score saved in your browser
      </p>
    </div>
  );
}