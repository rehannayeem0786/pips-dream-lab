# 🍼 Baby's First Website

**haX.baby Baby's First Website Hackathon** | Oct 17-19, 2026

A nostalgic journey through every era of the internet — from GeoCities to 2026. Watch a website grow up, one scroll at a time.

## ✨ Features

- **Terminal Boot Sequence** — Watch the website "come alive" with a typing animation
- **4 Internet Eras** — GeoCities (1995), MySpace (2005), Web 2.0 (2012), and Now (2026)
- **Interactive Guestbook** — Sign it, read it, relive the 90s
- **Visitor Counter** — Classic hit counter, server-side incremented
- **Knowledge Graph** — This codebase visualized using [Graphify](https://github.com/Graphify-Labs/graphify)
- **Web Audio Sound Effects** — Dial-up modem, clicks, success chimes (with mute button!)
- **Konami Code Easter Egg** — ↑↑↓↓←→←→BA
- **Star Field Canvas** — Animated twinkling stars background
- **Marquee & Under Construction** — Because it's 1995 and we're proud

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 + custom CSS animations
- **Fonts:** Press Start 2P, VT323, Comic Neue, Space Grotesk
- **Audio:** Web Audio API (no external dependencies)
- **Storage:** File-based JSON (guestbook + visitor count)
- **Visualization:** SVG-based knowledge graph (Graphify-inspired)

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── guestbook/route.ts   # GET/POST guestbook entries
│   │   └── visitors/route.ts    # GET visitor count (increments)
│   ├── globals.css              # Retro theme + animations
│   ├── layout.tsx               # Root layout + metadata
│   └── page.tsx                 # Main page (all 4 eras)
├── components/
│   ├── StarField.tsx            # Animated star canvas
│   ├── SoundManager.tsx         # Web Audio hook + mute button
│   ├── VisitorCounter.tsx       # Classic hit counter
│   ├── Guestbook.tsx            # Interactive guestbook
│   ├── KonamiCode.tsx           # Secret code listener
│   └── GraphifySection.tsx      # Knowledge graph visualization
data/
├── guestbook.json               # Guestbook entries storage
└── visitors.json                # Visitor count storage
```

## 🎯 Hackathon Alignment

| Criteria | How We Deliver |
|----------|---------------|
| Early-web spirit | GeoCities table layout, marquee, under construction, hit counter |
| Mobile responsive | All sections responsive with Tailwind breakpoints |
| Sound effects (+3 bonus) | Web Audio API with easy-to-spot mute control |
| Working website | Live deploy ready (Vercel-compatible) |
| Public GitHub repo | Clean commit history during Oct 17-19 |
| Creativity | 4-era narrative, Konami code, knowledge graph |

## 📄 License

MIT — Built with 💖 for the haX.baby community
