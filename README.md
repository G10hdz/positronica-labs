# POSITRONICA LABS®

**AI for a fairer future.**

Landing page for Positronica Labs, a technology laboratory built by women, for everyone. We ship tools that make hiring fairer, learning adaptive, and automation accessible.

## The Ecosystem

| Project | Description | Status |
|---------|-------------|--------|
| **FairHire** | Gender pay gap & job fit analyzer | [Live](https://fairfit-ai.netlify.app) |
| **Ergane** | Job search automation engine | Active |
| **Metis** | Local personal AI agent | Active |
| **Venus AI** | Beauty & spa management platform | Beta |
| **Hypatia** | Adaptive learning for neurodivergent minds | New |
| **Echo** | Pronunciation practice dashboard | New |

## Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS v4** (CSS-first `@theme` config)
- **Framer Motion** (scroll reveal animations)
- **React Router** (SPA routing)
- **Lucide React** (icons)

## Design System

The visual language follows **"The Clinical Sublime"**, a luminous, futuristic aesthetic built on lavender (`#645880` / `#C4B5E3`), glassmorphism, and the "No-Line" philosophy.

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#645880` | Actions, headlines, active states |
| Primary Container | `#C4B5E3` | Highlights, accents |
| Secondary Container | `#FFCFEC` | Pink accent for hover/CTAs |
| Surface | `#F9F9FB` | Background base |
| On Surface | `#1A1C1D` | Body text |

### Typography
| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Brand | **Orbitron** | 400/700/900 | Hero headlines, status labels |
| Headline | **Space Grotesk** | 300-700 | Section titles, nav |
| Body | **Inter** | 300-600 | All readable text |

### Key Patterns
- **Dot grid background** — subtle `#C4B5E3` radial gradient
- **Glassmorphism cards** — `backdrop-blur(24px)` + white/60%
- **Gradient pulse dividers** — animated lavender-to-pink lines
- **Sharp corners** — `0px` radius, no soft edges
- **No-line rule** — sectioning via tonal shifts, not borders

Full spec in [DESIGN.md](./DESIGN.md).

## Project Structure

```
├── positronica-web/        # React app (production-ready)
│   ├── src/
│   │   ├── components/     # Reusable UI
│   │   │   ├── layout/     # NavBar, Footer, Layout
│   │   │   └── sections/   # Page sections (Hero, Cards, etc.)
│   │   ├── pages/          # IndexPage, EthicsPage, TeamPage
│   │   ├── data/           # Content as structured data
│   │   ├── hooks/          # useDarkMode
│   │   └── lib/            # Utility functions
│   └── public/             # Static assets (favicon)
├── old-static/             # Archived static HTML files (v1)
├── DESIGN.md               # Design system specification
└── README.md               # This file
```

## Run Locally

### Development
```bash
cd positronica-web
npm install
npm run dev
```
→ Opens at `http://localhost:5173` with hot reload

### Production Build
```bash
cd positronica-web
npm run build
npm run preview     # preview production build
```
→ Output in `positronica-web/dist/`

### Pages
| Route | Content |
|-------|---------|
| `/` | Home: Hero, Projects, Lab stats, Ethics preview |
| `/ethics` | Ethics & Responsibility: Values, Quote, 6 Principles |
| `/team` | Team: Founders, Focus, Timeline, Repo Status |

## Deploy

### Netlify
```bash
cd positronica-web
npm run build
```
Deploy the `dist/` folder or connect the repo with:
- **Build command:** `cd positronica-web && npm run build`
- **Publish directory:** `positronica-web/dist`

### Vercel
Auto-detects Vite. Set root directory to `positronica-web`.

## Dark Mode

Toggle via the moon/sun icon in the navbar. Persists to `localStorage`.
Respects `prefers-color-scheme` on first visit.

## Team

- **Mayte Giovanna Hernández Ríos** ([@G10hdz](https://github.com/G10hdz)) · Co-Founder, Full-Stack
- **Jeaneth S. Hdz Ríos** ([@jeanethS](https://github.com/jeanethS)) · Co-Founder, Full-Stack
- **Gio** ([@G10hdz](https://github.com/G10hdz)) · Collaborator, Cloud & AI Infrastructure

## License

[MIT](./LICENSE)
