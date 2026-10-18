# 🍼 Pip's Dream Lab

**The portfolio of Pip — Junior Dream Engineer at the Midnight Nursery**
haX.baby · Baby's First Website · **Track 1: Same Baby, 1,000 Websites** · Oct 17–19, 2026

> _"I build the dreams you fall asleep inside."_

Pip is a skull-faced baby in a starred nightcap who engineers the dreams, lullabies and nightlights that help the neighbourhood's little creatures fall asleep. This site is his portfolio, dressed head-to-toe in early-web soul — because Pip's favourite dream texture **is** the old web.

## 📖 Story Behind the Build (short version — full write-up at [`/story`](/story))

Every great portfolio starts with a hello. The brief asked for a character portfolio with early-web soul, so we asked: *what would the old web look like if a dream engineer built it?* The answer: guestbooks instead of contact forms, odometers instead of analytics, marquees instead of banners — and a character who naps in the hero until you click him.

**Proudest features:** the sleep→wake easter egg (organizers' tip: _"a sleeping character you can wake is pure joy"_); the **Lullaby Lab** — a generative music box where every note is a live Web Audio oscillator (zero audio files); the **Dream Journal** guestbook with a real persistence chain (file store → optional Upstash → localStorage fallback) that *remembers* returning visitors; a **Dream Delivery mini-game** (touch + keyboard); and a full sound package (dial-up boot, rattles, giggles, chimes) behind a visible, persistent mute toggle.

## ✨ Features

- 🛌 **Sleeping Pip hero** — click to wake him; he giggles, wiggles, and talks back
- 🎵 **Lullaby Lab** — generative music box, rattle shaker, Web Audio synthesis
- 🌙 **Nightlight Collection** — 5 clickable lamps with glow states
- 📈 **Growth Chart** — skills drawn as a nursery height chart (scroll-triggered)
- 🎮 **Dream Delivery** — catch-falling-dreams mini-game (pointer + arrow keys)
- 📝 **Dream Journal guestbook** — seeded, persistent, remembers you by name
- 🔢 **Visitor odometer** — "dreams delivered since 1996"
- ✨ **Sparkle cursor trail** + animated starfield
- 🔊 **Web Audio sound design** + obvious mute button (persists across visits)
- 🎮 **Konami code** (↑↑↓↓←→←→BA) → unlocks Pip's secret lullaby
- 🧠 **Knowledge graph** of this site's own component tree (Graphify-inspired)
- 🕸️ Retro nav chrome, GeoCities profile table, marquee, webring, glitchy 404
- 🌀 **Responsive Chaos Mode** — layout mutates per breakpoint (mobile nursery / tablet playpen / desktop dreamscape / landscape crib), turbo marquee on small screens, ≥44px touch targets, live chaos badge
- 📳 **Shake-to-rattle** — `devicemotion` easter egg: shake your phone and Pip's rattle synthesizes live
- 🧾 **Side Quest Log** — on-page panel proving all 5 official bonus quests (+13) so judges never miss them
- 🛡️ **ErrorBoundary + Pip-flavored 404** — zero-console-error guarantee
- 🗺️ **SEO/meta pack** — `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, build-generated 1200×630 Open Graph image

## 🎯 Judging rubric alignment

| Rubric (official) | Weight | How we deliver |
|---|---|---|
| Functionality & Polish | **35%** | Every control works; APIs tested live; tiered persistence never breaks; AudioContext resume-on-gesture; zero console errors; lint/build clean |
| Early-Web Soul | **30%** | GeoCities profile table, marquee, construction bars, hit odometer, webring, "best viewed" badges, dial-up sounds |
| Creativity & Surprises | **20%** | Sleep-to-wake egg, Konami secret lullaby, generative music box, brain-map graph, personalized return greetings |
| Clean Craft | **15%** | Mobile-first layout, `prefers-reduced-motion`, visible focus rings, semantic HTML, tidy component tree |

**Side quests (up to +13):** live guestbook ✅ +2 · sparkle cursor ✅ +2 · hit counter ✅ +1 · click sounds + mute ✅ +3 · responsive chaos mode ✅ +5

## 🛠 Tech Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript** · **Tailwind CSS 4**
- **Fonts:** Press Start 2P, VT323, Comic Neue, Space Grotesk (Google Fonts)
- **Audio:** Web Audio API — all SFX & music synthesized at runtime (no assets)
- **Persistence:** file-based JSON → optional Upstash REST → browser localStorage fallback (`src/lib/store.ts`)
- **Art:** official free Pip asset pack (hax.baby) + hand-written SVG/CSS

## 🧠 Architecture in 30 seconds

- **3-tier store** (`src/lib/store.ts`): file-based JSON → optional Upstash REST → localStorage fallback, so the guestbook never fails on any host.
- **Zero-asset audio** (`SoundManager.tsx`): every SFX, giggle and lullaby is a live Web Audio oscillator graph — no audio files shipped.
- **Chaos layer** (`ChaosMode.tsx` + breakpoint CSS in `globals.css`): the layout intentionally mutates per breakpoint/orientation for the Responsive Chaos Mode side quest.
- **Character layer**: hand-written SVG (`PipFace`, `PipFull`) with blink/wave keyframes + the official haX.baby asset pack PNGs.

## 🚀 Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
npm run lint     # eslint — must stay clean
```

### Deploy

```bash
npx vercel --prod
```

For a guestbook shared across **all** visitors on read-only hosts, create a free [Upstash](https://upstash.com) Redis (REST) database and set `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` in your host's env. Without them, everything still works: entries persist per-browser via localStorage.

## ✅ Submission checklist

- [x] Working website → deploy with `npx vercel --prod`
- [x] Public GitHub repo with commits during Oct 17–19 (push `main`)
- [x] Story behind your build → `/story` + this README
- [x] Credits on-site → `#credits` section (art, fonts, audio, libs, AI policy)
- [x] Mute toggle · mobile render · side quests complete

## 📄 License & credits

MIT. **Pip, his canon and all official art © haX.baby** (free Track 1 asset pack — see [the brief](https://hax.baby/baby-problem)). Fonts via Google Fonts. Knowledge-graph concept inspired by [Graphify](https://github.com/Graphify-Labs/graphify). Built with 💖 + AI pair programming (allowed by the brief; the human builder is the master architect).
