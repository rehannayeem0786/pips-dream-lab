"use client";

import { useEffect, useRef } from "react";

interface Sparkle {
  x: number;
  y: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
  vx: number;
  vy: number;
}

const COLORS = ["#ff6ec7", "#00ffff", "#ffff00", "#39ff14", "#ff88ff", "#88ffff"];

export default function SparkleCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let sparkles: Sparkle[] = [];
    let animationId: number;
    let mouseX = -100;
    let mouseY = -100;
    let lastSpawn = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const spawnSparkle = (x: number, y: number) => {
      const count = 2;
      for (let i = 0; i < count; i++) {
        sparkles.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          size: Math.random() * 4 + 2,
          life: 0,
          maxLife: Math.random() * 30 + 20,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 1,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const now = Date.now();
      if (now - lastSpawn > 30) {
        spawnSparkle(mouseX, mouseY);
        lastSpawn = now;
      }
    };

    const drawStar = (x: number, y: number, size: number, color: string, alpha: number) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.translate(x, y);
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        ctx.moveTo(0, 0);
        ctx.lineTo(size, 0);
        ctx.rotate(Math.PI / 2);
      }
      ctx.fill();
      // Center dot
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparkles = sparkles.filter((s) => s.life < s.maxLife);
      sparkles.forEach((s) => {
        s.life++;
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.05;
        const alpha = 1 - s.life / s.maxLife;
        const size = s.size * (1 - s.life / s.maxLife);
        drawStar(s.x, s.y, size, s.color, alpha);
      });
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9998]"
      aria-hidden="true"
    />
  );
}