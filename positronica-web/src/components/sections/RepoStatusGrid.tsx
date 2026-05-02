import { motion } from 'framer-motion'
import { repoStatuses } from '@/data/team'
import { useLang } from '@/i18n/useLang'

const statusLabelColors: Record<string, string> = {
  LIVE: 'bg-primary text-white',
  ACTIVE: 'bg-secondary text-white',
  BETA: 'bg-tertiary text-white',
  NEW: 'bg-on-surface text-white',
}

export function RepoStatusGrid() {
  const { lang, t } = useLang()

  return (
    <section className="px-6 md:px-12 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-brand text-3xl md:text-4xl mb-4 uppercase">
            {t.team.repoHeading}
          </h2>
          <div className="w-40 h-[1px] gradient-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repoStatuses.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-outline-variant/20 p-8 hover:bg-surface-container transition-colors group"
            >
              <div className="flex justify-between items-start mb-10">
                <span className="material-symbols-outlined text-primary">{repo.icon}</span>
                <span className={`text-[10px] font-technical tracking-widest px-3 py-1 ${statusLabelColors[repo.status]}`}>
                  {repo.status}
                </span>
              </div>
              <h3 className="font-brand text-base mb-2 uppercase">{repo.name}</h3>
              <p className="text-[10px] text-on-surface-variant font-technical mb-6 uppercase tracking-wider">
                {repo.tagline[lang]}
              </p>
              <div className="w-full h-[2px] bg-outline-variant/30 relative">
                <div
                  className={`absolute inset-y-0 left-0 ${repo.color}`}
                  style={{ width: `${repo.progress}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
