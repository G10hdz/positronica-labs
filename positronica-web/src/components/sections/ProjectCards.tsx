import { motion } from 'framer-motion'
import { projects } from '@/data/projects'

const statusColors: Record<string, string> = {
  LIVE: 'bg-primary',
  ACTIVE: 'bg-secondary',
  BETA: 'bg-tertiary',
  NEW: 'bg-on-surface',
}

export function ProjectCards() {
  return (
    <section id="projects" className="px-6 md:px-12 py-32 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-technical text-sm tracking-widest uppercase mb-2 block">
            ACTIVE PROJECTS
          </span>
          <h2 className="font-brand text-3xl md:text-4xl font-bold uppercase tracking-widest">
            The Ecosystem
          </h2>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {projects.slice(0, 3).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* 2-column centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.slice(3).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card group hover:border-primary-container/40 transition-colors h-[380px] flex flex-col"
    >
      {/* Visual header */}
      <div className="h-[35%] relative overflow-hidden bg-primary-container/10 flex items-center justify-center border-b border-primary-container/15">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 64 }}>
          {project.icon}
        </span>
        <div className={`absolute top-4 right-4 ${statusColors[project.status]} text-white text-[10px] font-bold px-3 py-1 tracking-widest`}>
          {project.status}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-brand font-bold text-xl mb-3 group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <p className="text-on-surface-variant font-technical tracking-widest text-[10px] uppercase leading-loose">
            {project.tagline}
          </p>
          <p className="text-on-surface-variant/70 text-sm mt-4 leading-relaxed">
            {project.description}
          </p>
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-primary font-semibold text-sm hover:gap-3 transition-all"
          >
            View Demo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  )
}
