# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Positronica Labs** is the production marketing site for a women-led technology lab. It's a fast, accessible React SPA with bilingual (EN/ES) content, dark mode support, and a custom design system built on Tailwind CSS v4.

**Live:** https://positronicalabs.netlify.app

## Stack & Architecture

| Layer | Tech | Notes |
|---|---|---|
| **Framework** | React 19 + TypeScript | Modern, strict types enforced |
| **Build** | Vite 8 | Fast HMR, `tsc -b` in build script |
| **Styling** | Tailwind CSS v4 | Token-driven via `@theme {}` block in `src/index.css` |
| **Routing** | React Router v7 | Three pages: `/`, `/ethics`, `/team` |
| **i18n** | Custom Context API | EN/ES toggle, localStorage-persisted, all content data is bilingual |
| **Animation** | Framer Motion + Three.js | Hero orbital scene, smooth transitions, respects `prefers-reduced-motion` |
| **Deploy** | Netlify | Auto-deploy on push to `main`, base dir = `positronica-web/` |

## Development Commands

```bash
npm install           # Install dependencies
npm run dev          # Start dev server (localhost:5173, Vite HMR enabled)
npm run build        # Production build: tsc -b && vite build
npm run lint         # Run ESLint on all .ts/.tsx files
npm run preview      # Preview production build locally
```

### Key Patterns to Know

**Type checking:** `npm run build` runs `tsc -b` first, so all type errors block the build. Run this before pushing.

**Linting:** ESLint uses flat config (`eslint.config.js`). Rule set: recommended JS + TypeScript + React Hooks + React Refresh.

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── NavBar.tsx          Desktop nav + mobile hamburger, dark/light toggle, language toggle
│   │   ├── Footer.tsx          Footer with links and copyright
│   │   ├── IntroLoader.tsx      Splash screen loader (checks localStorage for 'loader' flag)
│   │   └── Layout.tsx           Wrapper for <NavBar>, <main>, <Footer>
│   └── sections/
│       ├── HeroSection.tsx      Hero headline + subtitle + CTA buttons
│       ├── OrbitalScene.tsx     Three.js orbital animation (respects prefers-reduced-motion)
│       ├── ProjectCards.tsx     Grid of bilingual project cards
│       ├── ValueCard.tsx        Single value card component (reused in multiple sections)
│       ├── PrincipleGrid.tsx    6-principle ethics grid
│       ├── QuoteSection.tsx     Bilingual quote display
│       ├── FounderCards.tsx     Team founder cards
│       ├── CurrentFocus.tsx     Current initiatives section
│       ├── Timeline.tsx         Timeline visualization (team page)
│       ├── RepoStatusGrid.tsx   Repository status cards
│       └── ProjectVisual.tsx    Project visual showcase
│
├── pages/
│   ├── IndexPage.tsx           Home page (Hero + Projects + Ethics + Principles)
│   ├── EthicsPage.tsx          Ethics deep-dive page
│   └── TeamPage.tsx            Team, timeline, repo status
│
├── data/
│   ├── nav.ts                  Navigation links + site config (all bilingual)
│   ├── projects.ts             Project card data (title, desc, tags, links)
│   ├── team.ts                 Founder profiles + timeline events
│   └── ethics.ts               Core values + principles data
│
├── i18n/
│   ├── LanguageContext.tsx     Context provider (lang toggle, localStorage sync)
│   └── translations.ts         Bilingual string dictionary (type-safe)
│
├── hooks/
│   └── useDarkMode.ts          Dark mode toggle (localStorage + className on html)
│
├── router.tsx                  React Router v7 config
├── App.tsx                     Root wrapper with providers
├── main.tsx                    Entry point
└── index.css                   Tailwind @theme tokens + dark mode overrides + keyframes
```

## Design System

**Token System:** All design tokens live in `src/index.css` via Tailwind v4's `@theme {}` block.

```css
@theme {
  --color-primary: #465a79;
  --color-inverse-primary: #cebfee;  /* For dark mode */
  /* ... 60+ tokens defined ... */
  --font-brand: 'Space Grotesk';
  --radius-sm: 2px;
  /* etc */
}
```

**Dark Mode:** Class-based (`.dark` on `<html>`). All colors flip via CSS variables — e.g., `text-primary` becomes the inverse-primary token value in dark mode.

**Key Constraint:** Dark mode palette inversions must maintain **WCAG AA contrast** in both light and dark themes. All colors are pre-vetted for this.

**Typography:**
- `font-brand` (Orbitron) — Logo, headlines
- `font-technical` (Space Grotesk) — Nav, UI labels
- `font-body` (Inter) — Paragraph text, default

**Border Radius:** Defined as `--radius-sm` (2px), `--radius-md` (4px), `--radius-lg` (8px) — sharp, minimal corners per brand.

## i18n & Content

**Pattern:** All content data is bilingual. Example from `src/data/nav.ts`:

```typescript
export const navLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Ethics', href: '/ethics' },
  // ...
]

export const siteConfig = {
  name: 'Positronica Labs',
  // ...
}
```

Components access translations via the `useLang()` hook:

```typescript
const { lang, toggle: toggleLang, t } = useLang()

// t.nav.projects returns the current language's string
// toggle() flips EN ↔ ES and syncs to localStorage
```

**Key Rule:** Before adding new text to components, add it to `src/i18n/translations.ts` with both EN and ES values. Don't hardcode strings.

## Accessibility Standards

✅ **WCAG AA Compliance:**
- All text/background color pairs pass AA contrast in both light and dark themes
- Skip-to-main-content link in NavBar
- Mobile nav uses `aria-expanded` / `aria-controls`
- External links annotated with `aria-label="opens in new tab"`

✅ **Motion & Reduced Motion:**
- All CSS keyframe animations check `prefers-reduced-motion` via media query
- Three.js orbital loop respects `prefers-reduced-motion` (disables animation if set)
- Framer Motion components don't force animation when user prefers reduced motion

## Deployment

**Netlify Config:** `netlify.toml` (in repo root)

```toml
[build]
  base = "positronica-web"          # Build from this subdirectory
  command = "npm ci && npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"               # SPA redirect (all routes → /index.html)
  status = 200
```

**Build Process:**
1. `npm ci` (clean install)
2. `npm run build` → runs `tsc -b && vite build`
3. Output → `dist/` folder
4. Netlify serves `dist/index.html` for all non-file routes

**Manual Deploy:** Push to `main` → Netlify auto-deploys within 1-2 minutes.

## Common Development Tasks

### Adding a New Page

1. Create `src/pages/NewPage.tsx` (wrap in Layout)
2. Add route to `src/router.tsx`
3. Add nav link to `src/data/nav.ts` (EN + ES)
4. Add translation strings to `src/i18n/translations.ts`

### Adding Bilingual Content

1. Add data object to appropriate file in `src/data/` with EN + ES fields
2. Create translations in `src/i18n/translations.ts` if needed
3. Use `useLang()` in component: `const { t } = useLang(); return <div>{t.section.key}</div>`

### Updating Colors/Tokens

1. Edit `src/index.css` in the `@theme {}` block
2. Reference via Tailwind classes: `className="text-primary bg-surface-container"`
3. Dark mode variants: tokens automatically flip in `.dark` context
4. Verify contrast ratios before committing (WCAG AA minimum)

### Testing Dark Mode

DevTools → Cmd+Shift+P → "Emulate CSS media feature prefers-color-scheme" → `dark`

Or toggle via NavBar button and check `localStorage.getItem('theme')`.

### Checking Accessibility

1. Keyboard nav: Tab through all interactive elements
2. Screen reader: Use OS built-in (NVDA/JAWS on Windows, VoiceOver on Mac)
3. Contrast: Use WebAIM contrast checker or browser DevTools
4. Motion: DevTools → Cmd+Shift+P → "Emulate CSS media feature prefers-reduced-motion" → `reduce`

## Code Quality Checklist

Before committing:

- [ ] **Type Check:** `npm run build` completes without errors
- [ ] **Lint:** `npm run lint` shows no errors
- [ ] **Dev Test:** `npm run dev` and manually test the feature in browser
- [ ] **Dark Mode:** Test both light and dark themes (use NavBar toggle)
- [ ] **Mobile:** Test at 375px viewport (mobile hamburger nav appears)
- [ ] **i18n:** If adding text, verify both EN and ES strings exist
- [ ] **Accessibility:** Tab through interactive elements, check color contrast

## Key Files to Know

| File | Purpose |
|---|---|
| `src/index.css` | Tailwind @theme tokens, dark mode, keyframes — the design authority |
| `src/i18n/translations.ts` | Single source of truth for all EN/ES strings |
| `src/data/nav.ts` | Navigation structure + site config (name, links) |
| `src/router.tsx` | Route definitions (/, /ethics, /team) |
| `src/hooks/useDarkMode.ts` | Dark mode state manager (localStorage + class toggle) |
| `netlify.toml` | Build config + SPA redirects |

## Performance Notes

- Vite HMR is fast; dev feedback is near-instant
- Three.js orbital scene: consider lazy-loading if Lighthouse scores drop
- Image assets: serve via Netlify CDN; no optimization needed locally
- No build-time analytics or tracking; all client-side

## Troubleshooting

**"Module not found" errors:**
- Check `@` alias import paths — should resolve to `src/`
- Restart dev server if you added new files

**Dark mode not persisting:**
- Check `localStorage.getItem('theme')` in DevTools
- Ensure `useDarkMode()` hook is mounted at root level

**Type errors in build but not in IDE:**
- Run `npm run build` locally and fix errors before pushing
- TS strict mode is on; all errors must be resolved

**Netlify deploy fails:**
- Check `netlify.toml` base directory is correct: `base = "positronica-web"`
- Verify `npm ci && npm run build` runs locally without errors
- Check Netlify build logs for exact error

## Notes for Future Work

- **SEO:** Add meta tags / OpenGraph for social sharing (currently missing)
- **Analytics:** Consider adding Plausible or similar privacy-respecting tracker
- **Images:** Optimize hero images for mobile (consider responsive srcset)
- **Performance:** Monitor Lighthouse scores on Netlify; optimize if below 80
