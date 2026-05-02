import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, siteConfig } from '@/data/nav'
import { useDarkMode } from '@/hooks/useDarkMode'
import { useLang } from '@/i18n/useLang'
import { Sun, Moon, Menu, X } from 'lucide-react'

export function NavBar() {
  const location = useLocation()
  const [isDark, toggleDark] = useDarkMode()
  const { lang, toggle: toggleLang, t } = useLang()
  const [mobileOpen, setMobileOpen] = useState(false)

  const labelMap: Record<string, string> = {
    Research: t.nav.research,
    Projects: t.nav.projects,
    Ethics: t.nav.ethics,
    Team: t.nav.team,
  }

  const isActive = (href: string) =>
    href === '/'
      ? location.pathname === '/'
      : location.pathname === href || location.pathname.startsWith(href.split('#')[0])

  const navLinkClass = (active: boolean) =>
    `relative font-technical text-[11px] tracking-[0.15em] uppercase transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-full after:origin-left after:bg-primary after:transition-transform after:duration-300 ${
      active
        ? 'text-primary font-bold after:scale-x-100'
        : 'text-on-surface-variant after:scale-x-0 hover:text-primary hover:after:scale-x-100'
    }`

  return (
    <>
      <motion.nav
        aria-label="Main navigation"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-outline-variant/12 bg-white/74 backdrop-blur-2xl dark:bg-surface/74"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
          <Link to="/" className="flex items-center gap-3">
            <span className="font-signal inline-flex h-8 w-8 items-center justify-center border border-primary-container/35 bg-primary-container/12 text-[11px] tracking-[0.22em] text-primary">
              PL
            </span>
            <span className="font-brand text-sm font-bold tracking-[0.16em] text-primary md:text-base">
              {siteConfig.name}
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              if (link.href.includes('#')) {
                return (
                  <a key={link.label} href={link.href} className={navLinkClass(active)}>
                    {labelMap[link.label] ?? link.label}
                  </a>
                )
              }
              return (
                <Link key={link.label} to={link.href} className={navLinkClass(active)}>
                  {labelMap[link.label] ?? link.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center border border-outline-variant/32 bg-surface-container-lowest/70 px-3 py-2 font-technical text-[10px] tracking-widest text-on-surface-variant transition-colors hover:text-primary"
              aria-label={lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>

            <button
              onClick={toggleDark}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center p-3 text-on-surface-variant transition-colors hover:text-primary"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center border border-primary/16 bg-primary px-5 py-2 font-brand text-[10px] tracking-[0.22em] text-on-primary uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-container hover:text-on-primary-container md:inline-flex"
            >
              {t.nav.connect}
              <span className="sr-only"> (opens in new tab)</span>
            </a>

            <button
              onClick={() => setMobileOpen((open) => !open)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center p-3 text-on-surface-variant transition-colors hover:text-primary md:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-outline-variant/12 bg-white/94 backdrop-blur-2xl dark:bg-surface/94 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-8">
              {navLinks.map((link) => {
                const active = isActive(link.href)
                const cls = `border-b border-outline-variant/10 py-4 font-technical text-sm tracking-[0.2em] uppercase transition-colors ${
                  active ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                }`
                if (link.href.includes('#')) {
                  return (
                    <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className={cls}>
                      {labelMap[link.label] ?? link.label}
                    </a>
                  )
                }
                return (
                  <Link key={link.label} to={link.href} onClick={() => setMobileOpen(false)} className={cls}>
                    {labelMap[link.label] ?? link.label}
                  </Link>
                )
              })}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-6 inline-flex justify-center bg-primary px-5 py-4 font-brand text-[10px] tracking-[0.2em] text-on-primary uppercase transition-colors hover:bg-secondary-container hover:text-on-secondary-container"
              >
                {t.nav.connect}
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
