import { HeroSection } from '@/components/sections/HeroSection'
import { ValueGrid } from '@/components/sections/ValueCard'
import { QuoteSection } from '@/components/sections/QuoteSection'
import { PrincipleGrid } from '@/components/sections/PrincipleGrid'
import { coreValues, principles } from '@/data/ethics'
import { useLang } from '@/i18n/LanguageContext'
import { motion } from 'framer-motion'

export function EthicsPage() {
  const { t } = useLang()
  const e = t.ethics

  return (
    <div className="dot-grid min-h-screen">
      <HeroSection
        subtitle={e.heroSubtitle}
        title={e.heroTitle}
        description={e.heroDesc}
      />

      <ValueGrid values={coreValues} />

      {/* Divider */}
      <div className="w-full max-w-7xl mx-auto px-12 mb-32">
        <div className="gradient-pulse h-[1px] w-full opacity-60" />
      </div>

      <QuoteSection
        quote={e.quote}
        highlight={e.quoteHighlight}
        underline={e.quoteUnderline}
      />

      <PrincipleGrid
        principles={principles}
        sectionLabel={e.principlesLabel}
        title={e.principlesHeading}
      />

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-40 px-6 md:px-12 flex flex-col items-center justify-center text-center max-w-3xl mx-auto"
      >
        <h2 className="font-brand text-xl tracking-[0.3em] mb-6 uppercase">
          {e.ctaHeading}
        </h2>
        <p className="text-on-surface-variant text-sm">{e.ctaBody}</p>
      </motion.section>
    </div>
  )
}
