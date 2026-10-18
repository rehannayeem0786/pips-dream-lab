"use client";

import { useState, useEffect, FormEvent } from "react";

interface Entry {
  id: string;
  name: string;
  message: string;
  emoji: string;
  timestamp: string;
}

const EMOJIS = ["👶", "🍼", "⭐", "🌈", "🎮", "💾", "🖥️", "🌐", "✨", "🎉"];

export default function Guestbook({
  onSuccess,
}: {
  onSuccess?: () => void;
}) {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emoji, setEmoji] = useState("👶");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/guestbook")
      .then((r) => r.json())
      .then(setEntries)
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message, emoji }),
      });
      if (!res.ok) throw new Error("Failed");
      const entry = await res.json();
      setEntries((prev) => [entry, ...prev]);
      setName("");
      setMessage("");
      setEmoji("👶");
      onSuccess?.();
    } catch {
      setError("Oops! Something went wrong. Try again!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Sign the guestbook */}
      <form
        onSubmit={handleSubmit}
        className="pixel-border p-6 mb-8 bg-black/60 backdrop-blur-sm"
      >
        <h3
          className="text-xl mb-4 text-center"
          style={{ fontFamily: "'Press Start 2P', monospace", color: "#ffff00", fontSize: "0.8rem" }}
        >
          ✍️ SIGN THE GUESTBOOK ✍️
        </h3>

        <div className="flex gap-2 mb-3 flex-wrap justify-center">
          {EMOJIS.map((e) => (
            <button
              key={e}
              type="button"
              onClick={() => setEmoji(e)}
              className={`text-2xl p-1 rounded transition-all ${
                emoji === e
                  ? "bg-[#ff6ec7]/30 scale-125 ring-2 ring-[#ff6ec7]"
                  : "hover:scale-110"
              }`}
            >
              {e}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name (or cool handle)..."
          maxLength={50}
          className="w-full mb-3 px-4 py-2 bg-black border-2 border-[#00ffff] text-[#00ffff] placeholder-gray-500 font-mono focus:outline-none focus:border-[#ff6ec7] transition-colors"
          required
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Leave a message for the baby... 💬"
          maxLength={500}
          rows={3}
          className="w-full mb-3 px-4 py-2 bg-black border-2 border-[#00ffff] text-[#00ffff] placeholder-gray-500 font-mono focus:outline-none focus:border-[#ff6ec7] transition-colors resize-none"
          required
        />

        {error && (
          <p className="text-red-400 text-sm mb-2 font-mono">{error}</p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 bg-gradient-to-r from-[#ff6ec7] to-[#9b59b6] text-black font-bold uppercase tracking-wider hover:from-[#00ffff] hover:to-[#39ff14] transition-all duration-300 disabled:opacity-50 cursor-pointer"
          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.7rem" }}
        >
          {submitting ? "WRITING..." : "📝 SIGN IT!"}
        </button>
      </form>

      {/* Entries */}
      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
        {entries.length === 0 && (
          <p className="text-center text-gray-400 font-mono italic">
            No messages yet... be the first! 🌟
          </p>
        )}
        {entries.map((entry) => (
          <div key={entry.id} className="guestbook-entry">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">{entry.emoji}</span>
              <span
                className="text-[#ff6ec7] font-bold"
                style={{ fontFamily: "'Comic Neue', cursive" }}
              >
                {entry.name}
              </span>
              <span className="text-xs text-gray-500 ml-auto font-mono">
                {new Date(entry.timestamp).toLocaleDateString()}
              </span>
            </div>
            <p
              className="text-[#00ffff] text-sm"
              style={{ fontFamily: "'VT323', monospace", fontSize: "1.1rem" }}
            >
              {entry.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}