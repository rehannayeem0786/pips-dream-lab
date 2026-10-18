import { ImageResponse } from "next/og";

export const alt = "Pip's Dream Lab — Baby's First Website";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a12",
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: 84, color: "#f7d9a0" }}>☾ ★ ♡ ✦</div>
        <div style={{ fontSize: 62, color: "#00ffff", marginTop: 18 }}>PIP&apos;S DREAM LAB</div>
        <div style={{ fontSize: 28, color: "#39ff14", marginTop: 14 }}>
          baby&apos;s first website · haX.baby hackathon 2026
        </div>
        <div style={{ fontSize: 24, color: "#ff6ec7", marginTop: 22 }}>
          (´｡• ᵕ •｡`) ♪ now with 100% more sparkle
        </div>
      </div>
    ),
    { ...size }
  );
}