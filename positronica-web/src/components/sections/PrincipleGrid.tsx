import { motion } from 'framer-motion'

interface Principle {
  id: string
  title: string
  description: string
  icon: string
}

interface PrincipleGridProps {
  principles: Principle[]
  sectionLabel?: string
  title?: string
}

export function PrincipleGrid({ principles, sectionLabel = 'Operational Protocol', title = 'The Six Principles' }: PrincipleGridProps) {
  return (
    <section className="px-6 md:px-12 py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h4 className="font-brand text-primary tracking-[0.3em] mb-4 uppercase text-xs">{sectionLabel}</h4>
            <h3 className="font-brand text-3xl md:text-5xl uppercase tracking-[0.1em]">{title}</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {principles.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1", fontSize: 20 }}>
                  {p.icon}
                </span>
                <h5 className="font-brand tracking-widest text-xs uppercase">{p.title}</h5>
              </div>
              <p className="text-sm text-on-surface-variant pl-9 border-l border-outline-variant/30 leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
