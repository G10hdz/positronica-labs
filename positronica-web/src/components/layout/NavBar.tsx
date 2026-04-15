import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, siteConfig } from '@/data/nav'
import { useDarkMode } from '@/hooks/useDarkMode'
import { useLang } from '@/i18n/LanguageContext'
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

  return (
    <>
      <motion.nav
        aria-label="Main navigation"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-surface/70 backdrop-blur-xl border-b border-outline-variant/15"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-brand font-black tracking-[0.2em] text-primary text-lg">
            {siteConfig.name}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              const cls = `font-technical tracking-[0.15em] uppercase text-[11px] transition-colors ${
                active
                  ? 'text-primary font-bold border-b border-primary pb-0.5'
                  : 'text-on-surface-variant hover:text-primary'
              }`
              // Use native <a> for hash anchors so the browser handles scroll
              if (link.href.includes('#')) {
                return (
                  <a key={link.label} href={link.href} className={cls}>
                    {labelMap[link.label] ?? link.label}
                  </a>
                )
              }
              return (
                <Link key={link.label} to={link.href} className={cls}>
                  {labelMap[link.label] ?? link.label}
                </Link>
              )
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="font-technical text-[10px] tracking-widest text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/40 px-3 py-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>

            <button
              onClick={toggleDark}
              className="p-3 rounded-sm text-on-surface-variant hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex bg-primary text-on-primary font-brand uppercase text-[10px] tracking-[0.2em] px-5 py-2 hover:bg-secondary-container hover:text-on-secondary-container transition-colors"
            >
              {t.nav.connect}
              <span className="sr-only"> (opens in new tab)</span>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden p-3 text-on-surface-variant hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile nav overlay */}
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
            className="fixed inset-x-0 top-16 z-40 bg-white/95 dark:bg-surface/95 backdrop-blur-xl border-b border-outline-variant/15 md:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-1">
              {navLinks.map((link) => {
                const cls = `font-technical tracking-[0.2em] uppercase text-sm py-4 border-b border-outline-variant/10 transition-colors ${
                  isActive(link.href)
                    ? 'text-primary font-bold'
                    : 'text-on-surface-variant hover:text-primary'
                }`
                if (link.href.includes('#')) {
                  return (
                    <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className={cls}>
                      {labelMap[link.label] ?? link.label}
                    </a>
                  )
                }
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cls}
                  >
                    {labelMap[link.label] ?? link.label}
                  </Link>
                )
              })}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-6 inline-flex justify-center bg-primary text-on-primary font-brand uppercase text-[10px] tracking-[0.2em] px-5 py-4 hover:bg-secondary-container hover:text-on-secondary-container transition-colors"
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
