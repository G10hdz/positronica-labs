# Positronica Labs — Web

Production site for [Positronica Labs](https://positronicalabs.netlify.app), a technology lab built by women, for everyone. We ship AI tools that close gaps, not widen them.

## Stack

| Layer | Tech |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) |
| Animation | Framer Motion + Three.js (orbital hero) |
| Routing | React Router v7 |
| i18n | Custom context — EN/ES toggle, `localStorage` persistence |
| Deploy | Netlify (auto-deploy on push to `main`) |

## Local development

```bash
npm install
npm run dev        # localhost:5173
npm run build      # production build + type check
```

## Project structure

```
src/
  components/
    layout/        NavBar (mobile hamburger + desktop), Footer, Layout, IntroLoader
    sections/      HeroSection, OrbitalScene, ProjectCards, ProjectVisual,
                   ValueCard, PrincipleGrid, QuoteSection, FounderCards,
                   CurrentFocus, Timeline, RepoStatusGrid
  data/            projects.ts, ethics.ts, team.ts, nav.ts — all fields bilingual
  hooks/           useDarkMode.ts
  i18n/            LanguageContext.tsx, translations.ts
  pages/           IndexPage, EthicsPage, TeamPage
  index.css        Tailwind @theme tokens + dark mode overrides + keyframe animations
```

## Design system

Token system defined in `src/index.css` via Tailwind v4 `@theme {}`. Dark mode is class-based (`.dark`) with a full palette inversion applied — `--color-primary` flips to `#cebfee` (inverse-primary) in dark mode so all `text-primary` usage passes WCAG AA contrast in both themes.

Custom font families: `font-brand` (Orbitron), `font-technical` (Space Grotesk), `font-body` (Inter).

## Accessibility

- WCAG AA contrast in both light and dark themes
- Skip-to-main-content link
- Mobile hamburger nav with `aria-expanded` / `aria-controls`
- All external links annotated with `aria-label` indicating new-tab behavior
- `prefers-reduced-motion` respected — all CSS keyframe animations and the Three.js loop check for the media query

## Pages

| Route | Description |
|---|---|
| `/` | Hero + Projects + Mission + Ethics preview + Principles |
| `/ethics` | Core values + quote + six principles |
| `/team` | Founders + current focus + timeline + repo status |

## Deploy

Netlify config is at `netlify.toml` in the repo root. Build base is `positronica-web/`. SPA redirects are handled via the `[[redirects]]` rule.

Live: **https://positronicalabs.netlify.app**
