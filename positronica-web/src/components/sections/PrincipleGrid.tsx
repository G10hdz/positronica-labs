import { motion } from 'framer-motion'
import { useLang } from '@/i18n/LanguageContext'
import type { BilingualText } from '@/data/projects'

interface Principle {
  id: string
  title: BilingualText
  description: BilingualText
  icon: string
}

interface PrincipleGridProps {
  principles: Principle[]
  sectionLabel?: string
  title?: string
}

export function PrincipleGrid({
  principles,
  sectionLabel = 'Operational Protocol',
  title = 'The Six Principles',
}: PrincipleGridProps) {
  const { lang } = useLang()

  return (
    <section className="px-6 md:px-12 py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h4 className="font-brand text-primary tracking-[0.3em] mb-4 uppercase text-xs">
              {sectionLabel}
            </h4>
            <h3 className="font-brand text-3xl md:text-5xl uppercase tracking-[0.1em]">{title}</h3>
          </div>
        </div>

        <div className="divide-y divide-outline-variant/20">
          {principles.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-12 py-10 group hover:bg-surface-container-lowest/40 transition-colors px-2"
            >
              {/* Index number */}
              <span className="font-brand text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Title */}
              <h5 className="font-brand tracking-widest text-xs uppercase leading-relaxed self-start pt-1 md:pt-2">
                {p.title[lang]}
              </h5>

              {/* Description */}
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {p.description[lang]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
