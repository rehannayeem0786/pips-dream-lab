import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baby's First Website | haX.baby",
  description:
    "A nostalgic journey through the evolution of the web. Built for the haX.baby Baby's First Website hackathon. Every era of the internet, one scroll at a time.",
  keywords: ["hackathon", "retro", "web", "nostalgia", "hax baby", "first website"],
  openGraph: {
    title: "Baby's First Website",
    description: "Watch a website grow up through every era of the internet",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
