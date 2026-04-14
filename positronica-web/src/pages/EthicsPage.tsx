import { HeroSection } from '@/components/sections/HeroSection'
import { ValueGrid } from '@/components/sections/ValueCard'
import { QuoteSection } from '@/components/sections/QuoteSection'
import { PrincipleGrid } from '@/components/sections/PrincipleGrid'
import { coreValues, principles } from '@/data/ethics'
import { motion } from 'framer-motion'

export function EthicsPage() {
  return (
    <div className="dot-grid min-h-screen">
      <HeroSection
        subtitle="> OUR_COMMITMENT_TO_TRANSPARENT_AI"
        title="ETHICS & RESPONSIBILITY"
        description="> BUILDING AI TOOLS THAT CLOSE GAPS, NOT WIDEN THEM"
      />

      <ValueGrid values={coreValues} />

      {/* Divider */}
      <div className="w-full max-w-7xl mx-auto px-12 mb-32">
        <div className="gradient-pulse h-[1px] w-full opacity-60" />
      </div>

      <QuoteSection
        quote='AI should serve humanity, not the reverse.'
        highlight="humanity"
        underline="reverse"
      />

      <PrincipleGrid principles={principles} />

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-40 px-6 md:px-12 flex flex-col items-center justify-center text-center max-w-3xl mx-auto"
      >
        <h2 className="font-brand text-xl tracking-[0.3em] mb-6 uppercase">
          BUILDING BEYOND THE HORIZON
        </h2>
        <p className="text-on-surface-variant mb-10 text-sm">
          Read our full technical whitepaper on AI alignment and ethical infrastructure. Our charter is updated quarterly to reflect emerging safety paradigms.
        </p>
        <button className="border border-primary text-primary px-10 py-4 font-brand uppercase text-[10px] tracking-[0.2em] hover:bg-secondary-container hover:border-secondary-container hover:text-on-secondary-container transition-all">
          Download Ethics Charter
        </button>
      </motion.section>
    </div>
  )
}
