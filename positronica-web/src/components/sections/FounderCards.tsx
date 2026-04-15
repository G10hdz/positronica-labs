import { motion } from 'framer-motion'
import { founders, type TeamMember } from '@/data/team'
import { useLang } from '@/i18n/LanguageContext'

export function FounderCards() {
  const { lang } = useLang()
  return (
    <section className="px-6 md:px-12 pb-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {founders.map((founder, i) => (
          <FounderCard key={founder.id} founder={founder} index={i} lang={lang} />
        ))}
      </div>
    </section>
  )
}

import type { Lang } from '@/i18n/translations'

function FounderCard({ founder, index, lang }: { founder: TeamMember; index: number; lang: Lang }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`bg-white/40 dark:bg-surface-container-low/40 backdrop-blur-xl border border-outline-variant/15 p-10 md:p-12 relative group ${
        index === 1 ? 'md:mt-24' : ''
      }`}
    >
      <div className="absolute -top-5 -right-5 w-20 h-20 border border-outline-variant/30 flex items-center justify-center bg-surface-bright dark:bg-surface">
        <span className="font-technical text-[10px] tracking-widest text-primary/40 rotate-90">
          FOUNDER_0{index + 1}
        </span>
      </div>

      <div className={`mb-10 w-28 h-28 bg-gradient-to-br ${founder.gradient} flex items-center justify-center`}>
        <span className="font-brand text-4xl text-white">{founder.initials}</span>
      </div>

      <h2 className="font-brand text-2xl md:text-3xl mb-2 tracking-wide uppercase">{founder.name}</h2>
      <p className="font-technical text-primary tracking-widest text-[10px] mb-6 uppercase">
        {founder.role[lang]} | {founder.title[lang]}
      </p>
      <p className="text-on-surface-variant leading-relaxed mb-10 max-w-md">{founder.bio[lang]}</p>

      <div className="flex gap-5">
        <a
          href={founder.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${founder.name} on LinkedIn (opens in new tab)`}
          className="flex items-center gap-2 text-[10px] font-technical tracking-widest text-on-surface-variant hover:text-primary transition-colors uppercase"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          LinkedIn
        </a>
        <a
          href={founder.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${founder.name} on GitHub (opens in new tab)`}
          className="flex items-center gap-2 text-[10px] font-technical tracking-widest text-on-surface-variant hover:text-primary transition-colors uppercase"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
      </div>
    </motion.div>
  )
}
