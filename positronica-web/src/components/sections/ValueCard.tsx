import { motion } from 'framer-motion'
import { useLang } from '@/i18n/LanguageContext'
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

  const accentColors = [
    'bg-primary',
    'bg-secondary',
    'bg-tertiary',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="p-10 flex flex-col justify-between min-h-[220px] border-t border-outline-variant/20 hover:bg-surface-container transition-colors group"
    >
      <div className={`w-8 h-[3px] mb-8 ${accentColors[index % accentColors.length]}`} />
      <div>
        <h3 className="font-brand text-base tracking-[0.12em] mb-4 uppercase leading-snug">
          {title[lang]}
        </h3>
        <p className="text-sm text-on-surface-variant leading-relaxed">{description[lang]}</p>
      </div>
    </motion.div>
  )
}

interface ValueGridProps {
  values: ValueCardProps[]
}

export function ValueGrid({ values }: ValueGridProps) {
  return (
    <section className="px-6 md:px-12 pb-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-x-0 md:divide-x divide-outline-variant/15">
        {values.map((v, i) => (
          <ValueCard key={v.id || i} {...v} index={i} />
        ))}
      </div>
    </section>
  )
}
