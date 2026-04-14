import { motion } from 'framer-motion'

interface HeroProps {
  subtitle?: string
  title: string
  description?: string
  actions?: React.ReactNode
  imageAlt?: string
  imageUrl?: string
}

export function HeroSection({ subtitle, title, description, actions, imageAlt, imageUrl }: HeroProps) {
  return (
    <section className="px-6 md:px-12 py-24 md:py-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          {subtitle && (
            <p className="text-primary font-technical text-xs tracking-[0.3em] mb-4 uppercase">
              {subtitle}
            </p>
          )}
          <h1 className="font-brand font-black text-5xl md:text-7xl lg:text-8xl tracking-[0.1em] leading-[0.9] text-on-surface uppercase">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-on-surface-variant font-technical tracking-[0.15em] text-sm uppercase">
              {description}
            </p>
          )}
          {actions && <div className="mt-8 flex flex-wrap gap-4">{actions}</div>}
        </motion.div>

        {imageUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block w-full md:w-1/3 aspect-square bg-surface-container overflow-hidden"
          >
            <img
              src={imageUrl}
              alt={imageAlt || ''}
              className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
