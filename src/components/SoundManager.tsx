"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

interface SoundContextValue {
  muted: boolean;
  toggleMute: () => void;
  playClick: () => void;
  playSuccess: () => void;
  playDialUp: () => void;
  playGiggle: () => void;
  playRattle: () => void;
  playHover: () => void;
  lullabyOn: boolean;
  toggleLullaby: () => void;
}

const SoundContext = createContext<SoundContextValue | null>(null);
const MUTE_KEY = "pip-muted";

export function SoundProvider({ children }: { children: ReactNode }) {
  const [muted, setMuted] = useState(false);
  const [lullabyOn, setLullabyOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const mutedRef = useRef(false);
  const loopRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let cancelled = false;
    const t = setTimeout(() => {
      if (cancelled) return;
      try {
        if (localStorage.getItem(MUTE_KEY) === "1") { mutedRef.current = true; setMuted(true); }
      } catch { /* ignore */ }
    }, 0);
    const resume = () => { ctxRef.current?.resume().catch(() => {}); };
    window.addEventListener("pointerdown", resume);
    window.addEventListener("keydown", resume);
    return () => {
      cancelled = true;
      clearTimeout(t);
      window.removeEventListener("pointerdown", resume);
      window.removeEventListener("keydown", resume);
      if (loopRef.current) clearInterval(loopRef.current);
    };
  }, []);

  useEffect(() => {
    mutedRef.current = muted;
    try { localStorage.setItem(MUTE_KEY, muted ? "1" : "0"); } catch { /* ignore */ }
    if (muted && loopRef.current) {
      clearInterval(loopRef.current);
      loopRef.current = null;
      setLullabyOn(false);
    }
  }, [muted]);

  const getCtx = useCallback(() => {
    if (!ctxRef.current) {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      ctxRef.current = new AC();
    }
    if (ctxRef.current.state === "suspended") void ctxRef.current.resume();
    return ctxRef.current;
  }, []);

  const tone = useCallback(
    (freq: number, delay: number, dur: number, type: OscillatorType, vol: number, endFreq?: number) => {
      if (mutedRef.current) return;
      const ctx = getCtx();
      const t0 = ctx.currentTime + delay;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t0);
      if (endFreq) osc.frequency.exponentialRampToValueAtTime(Math.max(1, endFreq), t0 + dur);
      gain.gain.setValueAtTime(vol, t0);
      gain.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t0);
      osc.stop(t0 + dur + 0.02);
    },
    [getCtx]
  );

  const playClick = useCallback(() => tone(800, 0, 0.1, "sine", 0.1, 400), [tone]);
  const playHover = useCallback(() => tone(1250, 0, 0.05, "sine", 0.03), [tone]);

  const playSuccess = useCallback(() => {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, i * 0.1, 0.16, "square", 0.05));
  }, [tone]);

  const playGiggle = useCallback(() => {
    const b = 540 + Math.random() * 90;
    [b, b * 1.3, b * 1.08, b * 1.38].forEach((f, i) => tone(f, i * 0.08, 0.09, "triangle", 0.07));
  }, [tone]);

  const playRattle = useCallback(() => {
    for (let i = 0; i < 5; i++) tone(1300 + Math.random() * 500, i * 0.05, 0.05, "triangle", 0.05);
  }, [tone]);

  const playDialUp = useCallback(() => {
    if (mutedRef.current) return;
    const ctx = getCtx();
    const dur = 2;
    const o1 = ctx.createOscillator();
    const o2 = ctx.createOscillator();
    const g = ctx.createGain();
    o1.connect(g); o2.connect(g); g.connect(ctx.destination);
    o1.type = "sine"; o2.type = "sine";
    const t = ctx.currentTime;
    o1.frequency.setValueAtTime(1000, t);
    o1.frequency.linearRampToValueAtTime(2000, t + dur * 0.3);
    o1.frequency.setValueAtTime(300, t + dur * 0.5);
    o2.frequency.setValueAtTime(1200, t);
    o2.frequency.linearRampToValueAtTime(2400, t + dur * 0.4);
    g.gain.setValueAtTime(0.03, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o1.start(t); o2.start(t);
    o1.stop(t + dur); o2.stop(t + dur);
  }, [getCtx]);

  // Generative music-box lullaby: pentatonic phrases, slight key drift each loop.
  const runPhrase = useCallback(() => {
    const pent = [523.25, 587.33, 659.25, 783.99, 880, 1046.5];
    const shape = [0, 2, 4, 5, 4, 2, 1, 0];
    const factor = [1, 1.0595, 1.1225][Math.floor(Math.random() * 3)];
    shape.forEach((deg, i) => {
      const f = pent[deg] * factor;
      tone(f, i * 0.42, 0.5, "sine", 0.055);
      tone(f * 2, i * 0.42, 0.3, "sine", 0.014);
    });
  }, [tone]);

  const toggleLullaby = useCallback(() => {
    if (mutedRef.current) return;
    if (loopRef.current) {
      clearInterval(loopRef.current);
      loopRef.current = null;
      setLullabyOn(false);
      return;
    }
    runPhrase();
    loopRef.current = setInterval(runPhrase, 4000);
    setLullabyOn(true);
  }, [runPhrase]);

  const toggleMute = useCallback(() => setMuted((m) => !m), []);

  const value = useMemo(
    () => ({ muted, toggleMute, playClick, playSuccess, playDialUp, playGiggle, playRattle, playHover, lullabyOn, toggleLullaby }),
    [muted, toggleMute, playClick, playSuccess, playDialUp, playGiggle, playRattle, playHover, lullabyOn, toggleLullaby]
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export function useSound(): SoundContextValue {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within SoundProvider");
  return ctx;
}

export function MuteButton() {
  const { muted, toggleMute } = useSound();
  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-4 right-4 z-[9999] w-12 h-12 rounded-full bg-black/80 border-2 border-[#ff6ec7] flex items-center justify-center text-xl hover:scale-110 transition-transform cursor-pointer"
      aria-label={muted ? "Unmute sounds" : "Mute sounds"}
      title={muted ? "Unmute sounds (Pip cries)" : "Mute sounds (Pip giggles)"}
    >
      {muted ? "🔇" : "🔊"}
    </button>
  );
}