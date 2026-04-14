import { HeroSection } from '@/components/sections/HeroSection'
import { ValueGrid } from '@/components/sections/ValueCard'
import { ProjectCards } from '@/components/sections/ProjectCards'
import { QuoteSection } from '@/components/sections/QuoteSection'
import { PrincipleGrid } from '@/components/sections/PrincipleGrid'
import { coreValues, principles } from '@/data/ethics'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function IndexPage() {
  return (
    <div className="dot-grid min-h-screen">
      {/* Hero */}
      <HeroSection
        subtitle="> PROJECT_MANIFESTO_V.01"
        title="AI FOR A FAIRER FUTURE"
        description="> BUILDING AI TOOLS THAT CLOSE GAPS, NOT WIDEN THEM."
        actions={
          <>
            <Link
              to="/#projects"
              className="bg-gradient-to-r from-primary-container to-secondary-container text-black px-8 py-3 font-brand tracking-widest text-xs font-bold hover:scale-105 transition-transform uppercase"
            >
              Explore Labs
            </Link>
            <Link
              to="/ethics"
              className="border border-primary-container/40 text-on-surface px-8 py-3 font-brand tracking-widest text-xs font-bold hover:bg-primary-container/5 transition-colors uppercase"
            >
              View Ethics
            </Link>
          </>
        }
      />

      {/* Divider */}
      <div className="w-full gradient-pulse h-[1px] opacity-40" />

      {/* Projects */}
      <ProjectCards />

      {/* Divider */}
      <div className="w-full gradient-pulse h-[1px] opacity-40" />

      {/* Laboratory Section */}
      <section className="py-32 relative overflow-hidden bg-white dark:bg-surface">
        <div className="absolute inset-0 dot-grid opacity-[0.03]" />
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-technical text-sm tracking-widest uppercase mb-4 block"
          >
            &gt; CORE_MISSION
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-brand text-4xl md:text-6xl font-black uppercase mb-10"
          >
            The Laboratory
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-on-surface-variant leading-relaxed mb-14"
          >
            Positronica Labs is a technology laboratory built by women, for everyone. We ship tools that make hiring fairer, learning adaptive, and automation accessible.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-primary-container/20 pt-14">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <span className="font-brand text-6xl font-bold text-primary">5</span>
              <span className="text-[10px] font-technical tracking-[0.3em] uppercase mt-3 text-on-surface-variant/60">
                ACTIVE PROJECTS
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <span className="font-brand text-6xl font-bold text-primary">2</span>
              <span className="text-[10px] font-technical tracking-[0.3em] uppercase mt-3 text-on-surface-variant/60">
                FOUNDERS
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ethics Preview */}
      <ValueGrid values={coreValues} />

      <QuoteSection
        quote="AI should serve humanity, not the reverse."
        highlight="humanity"
        underline="reverse"
      />

      <PrincipleGrid principles={principles} />

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-40 px-6 text-center"
      >
        <h2 className="font-brand text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
          READY TO EXPLORE?
        </h2>
        <p className="text-on-surface-variant mb-8 max-w-lg mx-auto">
          Dive deeper into our ethical framework or meet the team behind the research.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/ethics"
            className="bg-primary text-white px-10 py-3 font-brand uppercase text-[10px] tracking-[0.2em] hover:bg-secondary-container hover:text-on-secondary-container transition-colors"
          >
            View Ethics
          </Link>
          <Link
            to="/team"
            className="border border-primary text-primary px-10 py-3 font-brand uppercase text-[10px] tracking-[0.2em] hover:bg-secondary-container hover:border-secondary-container hover:text-on-secondary-container transition-all"
          >
            Meet the Team
          </Link>
        </div>
      </motion.section>
    </div>
  )
}
