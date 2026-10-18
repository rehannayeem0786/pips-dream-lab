import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}/`,
      lastModified: new Date("2026-10-19"),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE}/story`,
      lastModified: new Date("2026-10-19"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}