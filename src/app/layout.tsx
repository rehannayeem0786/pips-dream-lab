import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pip — Junior Dream Engineer at the Midnight Nursery",
  description:
    "The portfolio of Pip, a skull-faced baby who builds the dreams you fall asleep inside. Retro-90s guestbook, lullaby lab, nightlights and dream games — built for the haX.baby Baby's First Website hackathon.",
  keywords: [
    "Pip", "Junior Dream Engineer", "Midnight Nursery", "character portfolio",
    "retro web", "90s web", "hackathon", "hax baby", "guestbook", "Web Audio",
  ],
  openGraph: {
    title: "Pip — Junior Dream Engineer at the Midnight Nursery",
    description:
      "I build the dreams you fall asleep inside. Sign my journal, wind my music box, and wake me up (gently).",
    type: "website",
    siteName: "Pip's Dream Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pip — Junior Dream Engineer",
    description: "A retro-90s character portfolio for the haX.baby Baby's First Website hackathon.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d2b",
  width: "device-width",
  initialScale: 1,
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
