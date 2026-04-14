import { motion } from 'framer-motion'

interface ValueCardProps {
  id?: string
  icon: string
  title: string
  description: string
  index?: number
}

export function ValueCard({ icon, title, description, index = 0 }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card p-10 flex flex-col justify-between min-h-[200px] hover:bg-white/80 transition-colors group"
    >
      <div>
        <span className="material-symbols-outlined text-primary mb-4 block" style={{ fontSize: 28 }}>
          {icon}
        </span>
        <h3 className="font-brand text-lg tracking-[0.15em] mb-3 uppercase">{title}</h3>
      </div>
      <p className="text-sm text-on-surface-variant leading-relaxed">{description}</p>
    </motion.div>
  )
}

interface ValueGridProps {
  values: ValueCardProps[]
}

export function ValueGrid({ values }: ValueGridProps) {
  return (
    <section className="px-6 md:px-12 pb-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
        {values.map((v, i) => (
          <ValueCard key={v.id || i} {...v} index={i} />
        ))}
      </div>
    </section>
  )
}
