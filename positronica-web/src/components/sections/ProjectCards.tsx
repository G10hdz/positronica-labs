import { motion } from 'framer-motion'
import { projects, type Project } from '@/data/projects'
import { ProjectVisual } from './ProjectVisual'
import { useLang } from '@/i18n/useLang'
import type { Lang } from '@/i18n/translations'

const statusColors: Record<Project['status'], string> = {
  LIVE: 'bg-primary',
  ACTIVE: 'bg-secondary',
  BETA: 'bg-tertiary',
  NEW: 'bg-on-surface',
}

export function ProjectCards() {
  const { t, lang } = useLang()

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-32 md:px-12 md:py-40">
      <div className="absolute right-[8%] top-28 h-40 w-40 rounded-full bg-primary-container/16 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 md:mb-20 lg:grid-cols-[minmax(0,1.3fr)_minmax(260px,0.7fr)] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-medium text-on-surface-variant md:text-[15px]">{t.index.projectsLabel}</p>
            <h2 className="max-w-4xl font-brand text-[clamp(2.6rem,6vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.03em]">
              {t.index.projectsHeading}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-on-surface-variant md:text-base lg:justify-self-end">
            {lang === 'en'
              ? 'A focused proof system for agentic operations: fair signals, adaptive learning, knowledge orchestration, and service workflows.'
              : 'Un sistema de prueba para operaciones agenticas: señales justas, aprendizaje adaptativo, orquestacion de conocimiento y workflows de servicio.'}
          </p>
        </div>

        <div className="grid auto-rows-[minmax(300px,auto)] grid-cols-1 gap-6 md:grid-cols-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, lang }: { project: Project; index: number; lang: Lang }) {
  const { t } = useLang()

  const layoutClasses = [
    'md:col-span-7 md:row-span-2',
    'md:col-span-5',
    'md:col-span-5',
    'md:col-span-4',
    'md:col-span-8',
  ]

  const visualHeight = index === 0 || index === 4 ? 'md:h-[58%]' : 'md:h-[46%]'

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex h-full min-h-[320px] flex-col overflow-hidden border border-outline-variant/34 bg-surface-container-lowest/88 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 ${layoutClasses[index] ?? 'md:col-span-6'}`}
    >
      <div className={`relative h-[42%] ${visualHeight} overflow-hidden bg-[linear-gradient(145deg,rgba(202,215,232,0.14),rgba(252,248,242,0.72))]`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(202,215,232,0.22),transparent_45%),radial-gradient(circle_at_84%_12%,rgba(239,200,217,0.14),transparent_34%)]" />
        <ProjectVisual visual={project.visual} />
        <div className={`absolute right-5 top-5 ${statusColors[project.status]} px-3 py-1 text-[10px] font-bold tracking-[0.22em] text-white`}>
          {project.status}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-8 p-7 md:p-9">
        <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(180px,0.52fr)] md:items-start">
          <div>
            <div className="mb-5 font-technical text-[11px] tracking-[0.28em] text-on-surface-variant uppercase">
              {String(index + 1).padStart(2, '0')} / 05
            </div>
            <h3 className="font-brand text-[clamp(1.4rem,2.2vw,2.35rem)] leading-[0.96] tracking-[-0.02em] uppercase transition-colors duration-300 group-hover:text-primary">
              {project.name}
            </h3>
          </div>
          <p className="font-technical text-[10px] tracking-[0.22em] text-on-surface-variant uppercase leading-loose">
            {project.tagline[lang]}
          </p>
        </div>

        <p className="max-w-2xl text-sm leading-relaxed text-on-surface-variant md:text-[15px]">
          {project.description[lang]}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-outline-variant/12 pt-5">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
            >
              {t.projects.viewDemo}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-technical text-[11px] tracking-[0.22em] text-on-surface-variant uppercase transition-colors hover:text-primary"
            >
              {t.projects.repo}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
