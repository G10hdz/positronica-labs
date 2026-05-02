import { motion } from 'framer-motion'
import { useLang } from '@/i18n/useLang'
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
    <section className="bg-surface-container-low/55 px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl md:mb-20">
          <p className="mb-4 text-sm font-medium text-on-surface-variant md:text-[15px]">{sectionLabel}</p>
          <h3 className="font-brand text-[clamp(2.3rem,5vw,4.9rem)] uppercase leading-[0.9] tracking-[-0.03em] text-balance">
            {title}
          </h3>
        </div>

        <div className="divide-y divide-outline-variant/16">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-1 gap-6 py-9 md:grid-cols-[94px_minmax(220px,0.8fr)_minmax(0,1.3fr)] md:gap-10"
            >
              <span className="select-none font-signal text-5xl font-black leading-none text-primary/18 transition-colors duration-300 group-hover:text-primary/45">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h5 className="self-start font-brand text-sm uppercase leading-relaxed tracking-[0.16em] md:text-base">
                {principle.title[lang]}
              </h5>

              <p className="max-w-2xl text-sm leading-relaxed text-on-surface-variant md:text-[15px]">
                {principle.description[lang]}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
