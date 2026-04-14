import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navLinks, siteConfig } from '@/data/nav'
import { useDarkMode } from '@/hooks/useDarkMode'
import { Sun, Moon } from 'lucide-react'

export function NavBar() {
  const location = useLocation()
  const [isDark, toggleDark] = useDarkMode()

  return (
    <motion.nav
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
            const isActive = link.href === '/'
              ? location.pathname === '/'
              : location.pathname === link.href || location.pathname.startsWith(link.href.split('#')[0])

            return (
              <Link
                key={link.label}
                to={link.href}
                className={`font-technical tracking-[0.15em] uppercase text-[11px] transition-colors ${
                  isActive
                    ? 'text-primary font-bold border-b border-primary pb-0.5'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDark}
            className="p-2 rounded-sm text-on-surface-variant hover:text-primary transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-primary text-white font-brand uppercase text-[10px] tracking-[0.2em] px-5 py-2 hover:bg-secondary-container hover:text-on-secondary-container transition-colors"
          >
            Connect
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
