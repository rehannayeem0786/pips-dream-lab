"use client";

import { useEffect, useRef, useState } from "react";
import { useSound } from "./SoundManager";

/** Surprise toy: shake your phone and Pip's rattle synthesizes live (devicemotion). */
export default function ShakeRattle() {
  const { playRattle } = useSound();
  const [toast, setToast] = useState(false);
  const last = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined" || !("DeviceMotionEvent" in window)) return;
    let prev: { x: number; y: number; z: number } | null = null;
    let hide: ReturnType<typeof setTimeout> | null = null;

    const onMotion = (e: DeviceMotionEvent) => {
      const a = e.accelerationIncludingGravity;
      if (!a || a.x == null || a.y == null || a.z == null) return;
      const cur = { x: a.x, y: a.y, z: a.z };
      if (prev) {
        const delta =
          Math.abs(cur.x - prev.x) + Math.abs(cur.y - prev.y) + Math.abs(cur.z - prev.z);
        const now = Date.now();
        if (delta > 30 && now - last.current > 1600) {
          last.current = now;
          playRattle();
          setToast(true);
          if (hide) clearTimeout(hide);
          hide = setTimeout(() => setToast(false), 2200);
        }
      }
      prev = cur;
    };

    window.addEventListener("devicemotion", onMotion);
    return () => {
      window.removeEventListener("devicemotion", onMotion);
      if (hide) clearTimeout(hide);
    };
  }, [playRattle]);

  if (!toast) return null;
  return (
    <div
      role="status"
      className="fixed top-16 left-1/2 -translate-x-1/2 z-[9999] pixel-border bg-black/90 px-4 py-2 font-mono text-sm text-[#ffff00] rotate-[-2deg] whitespace-nowrap"
    >
      🍼 SHAKE SHAKE — Pip&apos;s rattle goes brrr!! (｡•̀ᴗ-)✧
    </div>
  );
}