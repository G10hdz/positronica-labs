import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface HeroProps {
  subtitle?: string
  title: ReactNode
  description?: string
  actions?: ReactNode
  visual?: ReactNode
}

export function HeroSection({ subtitle, title, description, actions, visual }: HeroProps) {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32">
      <div className={`max-w-7xl mx-auto grid grid-cols-1 gap-12 items-center ${visual ? 'lg:grid-cols-2' : ''}`}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle && (
            <p className="text-primary font-technical text-xs tracking-[0.3em] mb-4 uppercase">
              {subtitle}
            </p>
          )}
          <h1 className="font-brand font-black text-5xl md:text-7xl lg:text-[7rem] tracking-[0.05em] leading-[0.9] text-on-surface uppercase">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-on-surface-variant font-technical tracking-[0.15em] text-sm uppercase">
              {description}
            </p>
          )}
          {actions && <div className="mt-8 flex flex-wrap gap-4">{actions}</div>}
        </motion.div>

        {visual && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative h-[520px]"
          >
            {visual}
          </motion.div>
        )}
      </div>
    </section>
  )
}
