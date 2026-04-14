import { motion } from 'framer-motion'
import { timeline } from '@/data/team'

export function Timeline() {
  return (
    <section className="px-6 md:px-12 py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <div>
          <h2 className="font-brand text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">
            OUR JOURNEY
          </h2>
          <p className="text-on-surface-variant leading-relaxed text-lg max-w-md">
            From a singular vision to a laboratory of emerging technologies. We document every mutation, every breakthrough, and every ethical pivot.
          </p>
        </div>

        <div className="space-y-16 relative border-l border-outline-variant/50 pl-10">
          {timeline.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative"
            >
              <div className={`absolute -left-[47px] top-1 w-[11px] h-[11px] ${event.color}`} />
              <span className="font-technical text-[10px] tracking-widest text-primary mb-2 block uppercase">
                {event.date}
              </span>
              <h4 className="font-brand text-lg mb-3 uppercase">{event.title}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
