import { HeroSection } from '@/components/sections/HeroSection'
import { FounderCards } from '@/components/sections/FounderCards'
import { CurrentFocus } from '@/components/sections/CurrentFocus'
import { Timeline } from '@/components/sections/Timeline'
import { RepoStatusGrid } from '@/components/sections/RepoStatusGrid'
import { useLang } from '@/i18n/LanguageContext'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function TeamPage() {
  const { t } = useLang()
  const tm = t.team

  return (
    <div className="dot-grid min-h-screen">
      <HeroSection
        subtitle={tm.heroSubtitle}
        title={tm.heroTitle}
        description={tm.heroDesc}
      />

      <FounderCards />

      {/* Divider */}
      <div className="w-full h-[1px] gradient-pulse opacity-30" />

      <CurrentFocus />
      <Timeline />
      <RepoStatusGrid />

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-12 py-48 text-center"
      >
        <h2 className="font-brand text-4xl md:text-7xl font-bold mb-8 uppercase tracking-tight">
          {tm.ctaHeading}
        </h2>
        <p className="max-w-2xl mx-auto text-on-surface-variant mb-12 leading-relaxed">
          {tm.ctaBody}
        </p>
        <Link
          to="/ethics"
          className="inline-block bg-primary text-on-primary px-14 py-5 font-brand tracking-[0.3em] uppercase text-sm hover:bg-primary-container hover:text-on-primary-container transition-colors"
        >
          {tm.ctaBtn}
        </Link>
      </motion.section>
    </div>
  )
}
