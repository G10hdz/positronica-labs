import { motion } from 'framer-motion'
import { founders, collaborators, type TeamMember } from '@/data/team'
import { useLang } from '@/i18n/LanguageContext'

export function CurrentFocus() {
  const { lang, t } = useLang()
  const allMembers = [...founders, ...collaborators]

  return (
    <section className="px-6 md:px-12 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-brand text-3xl md:text-5xl font-bold uppercase tracking-tight">
            {t.team.focusHeading}
          </h2>
          <p className="font-technical text-[10px] tracking-[0.3em] text-on-surface-variant uppercase">
            {t.team.focusLabel}
          </p>
        </div>

        <div className={`grid grid-cols-1 gap-8 ${allMembers.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
          {allMembers.map((member, i) => (
            <FocusCard key={member.id} member={member} index={i} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}

import type { Lang } from '@/i18n/translations'

function FocusCard({ member, index, lang }: { member: TeamMember; index: number; lang: Lang }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`p-8 min-h-[300px] flex flex-col justify-between ${
        index === 0
          ? 'bg-surface-container-low'
          : index === 1
          ? 'bg-surface-container-high md:-mt-10'
          : 'bg-tertiary-container/20'
      }`}
    >
      <div>
        <span className="font-technical text-[10px] tracking-[0.2em] text-primary block mb-5 uppercase">
          ALLOCATION: {member.name.toUpperCase()}
        </span>
        <ul className="space-y-3">
          {member.focus.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-on-surface-variant font-technical text-xs">
              <span className={`w-2 h-2 ${index === 2 ? 'bg-on-tertiary-container' : index === 1 ? 'bg-secondary' : 'bg-primary'}`} />
              {item[lang]}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 h-12 w-full border-b border-outline-variant/30 flex items-end">
        <span className="text-4xl font-brand opacity-10">{String(index + 1).padStart(2, '0')}</span>
      </div>
    </motion.div>
  )
}
