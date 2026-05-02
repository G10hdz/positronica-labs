import { motion } from 'framer-motion'
import { useEffect } from 'react'
import type { ReactNode } from 'react'

interface HeroProps {
  subtitle?: string
  title: ReactNode
  description?: ReactNode
  actions?: ReactNode
  visual?: ReactNode
}

export function HeroSection({ subtitle, title, description, actions, visual }: HeroProps) {
  useEffect(() => {
    let cancelled = false
    let frameOne = 0
    let frameTwo = 0

    const dispatchReady = () => {
      if (cancelled) return
      window.dispatchEvent(new CustomEvent('positronica:hero-ready'))
    }

    const waitForFonts = async () => {
      if ('fonts' in document) {
        try {
          await Promise.race([
            document.fonts.ready,
            new Promise((resolve) => window.setTimeout(resolve, 900)),
          ])
        } catch {
          // Font readiness is best-effort; hero can still render without it.
        }
      }

      frameOne = window.requestAnimationFrame(() => {
        frameTwo = window.requestAnimationFrame(dispatchReady)
      })
    }

    void waitForFonts()

    return () => {
      cancelled = true
      window.cancelAnimationFrame(frameOne)
      window.cancelAnimationFrame(frameTwo)
    }
  }, [])

  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28">
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(202,215,232,0.2),transparent_68%)]" />
      <div className="absolute left-[10%] top-20 h-24 w-24 rounded-full bg-primary-container/16 blur-3xl" />
      <div className="absolute right-[10%] top-16 h-32 w-32 rounded-full bg-secondary-container/14 blur-3xl" />

      <div
        className={`relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 ${
          visual ? 'lg:grid-cols-[minmax(0,1.12fr)_minmax(440px,0.88fr)]' : ''
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-[46rem]"
        >
          {subtitle && <p className="section-kicker mb-6">{subtitle}</p>}
          <h1 className="max-w-5xl font-brand text-[clamp(3.85rem,9.2vw,8rem)] font-bold leading-[0.84] tracking-[-0.03em] text-balance uppercase text-on-surface">
            {title}
          </h1>
          {description && (
            <div className="mt-8 max-w-[42rem] text-on-surface-variant">
              {description}
            </div>
          )}
          {actions && <div className="mt-10 flex flex-wrap items-center gap-4">{actions}</div>}

          {visual && (
            <div className="hero-mobile-preview relative mt-12 block px-6 py-7 lg:hidden" aria-hidden="true">
              <div className="hero-mobile-preview-ring" aria-hidden="true" />
              <div className="hero-mobile-preview-core" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-x-6 bottom-6 h-px bg-[linear-gradient(90deg,transparent,rgba(70,90,121,0.24),transparent)]" />
            </div>
          )}
        </motion.div>

        {visual && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden h-[620px] lg:block"
          >
            <div className="hero-stage-ambient absolute inset-x-[18%] top-[16%] h-[15rem]" />
            <div className="hero-stage-halo absolute inset-x-[20%] top-[20%] h-[18rem]" />
            <div className="hero-stage-shadow absolute inset-x-[24%] bottom-[8%] h-10" />
            <div className="absolute inset-0 z-10">
              {visual}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
