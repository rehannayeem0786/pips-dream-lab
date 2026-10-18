"use client";

import { useState, useCallback, useRef } from "react";

export function useSound() {
  const [muted, setMuted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const getContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playClick = useCallback(() => {
    if (muted) return;
    const ctx = getContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.1);
  }, [muted, getContext]);

  const playSuccess = useCallback(() => {
    if (muted) return;
    const ctx = getContext();
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "square";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);
      gain.gain.setValueAtTime(0.05, ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.15);
      osc.start(ctx.currentTime + i * 0.1);
      osc.stop(ctx.currentTime + i * 0.1 + 0.15);
    });
  }, [muted, getContext]);

  const playDialUp = useCallback(() => {
    if (muted) return;
    const ctx = getContext();
    const duration = 2;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);
    osc1.type = "sine";
    osc2.type = "sine";
    osc1.frequency.setValueAtTime(1000, ctx.currentTime);
    osc1.frequency.linearRampToValueAtTime(2000, ctx.currentTime + duration * 0.3);
    osc1.frequency.setValueAtTime(300, ctx.currentTime + duration * 0.5);
    osc2.frequency.setValueAtTime(1200, ctx.currentTime);
    osc2.frequency.linearRampToValueAtTime(2400, ctx.currentTime + duration * 0.4);
    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc1.start(ctx.currentTime);
    osc2.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + duration);
    osc2.stop(ctx.currentTime + duration);
  }, [muted, getContext]);

  const toggleMute = useCallback(() => {
    setMuted((m) => !m);
  }, []);

  return { muted, toggleMute, playClick, playSuccess, playDialUp };
}

export function MuteButton({
  muted,
  onToggle,
}: {
  muted: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-4 right-4 z-[9999] w-12 h-12 rounded-full bg-black/80 border-2 border-[#ff6ec7] flex items-center justify-center text-xl hover:scale-110 transition-transform cursor-pointer"
      aria-label={muted ? "Unmute sounds" : "Mute sounds"}
      title={muted ? "Unmute sounds" : "Mute sounds"}
    >
      {muted ? "🔇" : "🔊"}
    </button>
  );
}