import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pip's Dream Lab — Baby's First Website",
    short_name: "Pip Lab",
    description:
      "A neon nursery portfolio for Pip the skull baby, built for haX.baby's Baby's First Website hackathon.",
    start_url: "/",
    background_color: "#0a0a12",
    theme_color: "#ff6ec7",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}