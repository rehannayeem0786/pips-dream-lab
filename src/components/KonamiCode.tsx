"use client";

import { useEffect, useState } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a",
];

export default function KonamiCode({ onActivate }: { onActivate: () => void }) {
  const [buffer, setBuffer] = useState<string[]>([]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const newBuffer = [...buffer, e.key].slice(-10);
      setBuffer(newBuffer);

      if (newBuffer.length === 10 && newBuffer.every((k, i) => k === KONAMI[i])) {
        onActivate();
        setBuffer([]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [buffer, onActivate]);

  return null;
}