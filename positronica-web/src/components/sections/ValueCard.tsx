import { motion } from 'framer-motion'
import { useLang } from '@/i18n/useLang'
import type { BilingualText } from '@/data/projects'

interface ValueCardProps {
  id?: string
  icon: string
  title: BilingualText
  description: BilingualText
  index?: number
}

export function ValueCard({ title, description, index = 0 }: ValueCardProps) {
  const { lang } = useLang()

  const accentColors = ['text-primary', 'text-secondary', 'text-tertiary']

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group grid gap-8 border-t border-outline-variant/18 px-0 py-12 md:grid-cols-[88px_minmax(0,0.7fr)_minmax(0,1fr)] md:items-start"
    >
      <span className={`font-signal text-5xl leading-none opacity-20 transition-opacity duration-300 group-hover:opacity-50 md:text-6xl ${accentColors[index % accentColors.length]}`}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="max-w-xs font-brand text-lg uppercase leading-snug tracking-[0.12em] md:text-xl">
        {title[lang]}
      </h3>
      <p className="max-w-xl text-sm leading-relaxed text-on-surface-variant md:text-[15px]">
        {description[lang]}
      </p>
    </motion.article>
  )
}

interface ValueGridProps {
  values: ValueCardProps[]
}

export function ValueGrid({ values }: ValueGridProps) {
  const { lang } = useLang()

  return (
    <section className="px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-6 md:mb-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(240px,0.95fr)] lg:items-end">
          <div>
            <span className="section-kicker mb-4 block">
              {lang === 'en' ? 'ETHICAL CORE' : 'NÚCLEO ÉTICO'}
            </span>
            <h2 className="max-w-4xl font-brand text-[clamp(2.4rem,5.2vw,5rem)] font-bold uppercase leading-[0.92] tracking-[-0.03em]">
              {lang === 'en'
                ? 'Foundations for humane systems.'
                : 'Fundamentos para sistemas humanos.'}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-on-surface-variant md:text-base lg:justify-self-end">
            {lang === 'en'
              ? 'Principles shaped by real friction in Mexico and LatAm, not speculative feature theater.'
              : 'Principios nacidos de fricción real en México y LatAm, no de teatro especulativo de producto.'}
          </p>
        </div>

        <div className="grid">
          {values.map((value, index) => (
            <ValueCard key={value.id || index} {...value} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
