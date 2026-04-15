import { HeroSection } from '@/components/sections/HeroSection'
import { ValueGrid } from '@/components/sections/ValueCard'
import { ProjectCards } from '@/components/sections/ProjectCards'
import { QuoteSection } from '@/components/sections/QuoteSection'
import { PrincipleGrid } from '@/components/sections/PrincipleGrid'
import { OrbitalScene } from '@/components/sections/OrbitalScene'
import { coreValues, principles } from '@/data/ethics'
import { useLang } from '@/i18n/LanguageContext'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function IndexPage() {
  const { t, lang } = useLang()
  const i = t.index

  const heroTitle = (
    <span>
      <span className="block">{lang === 'en' ? 'AI FOR A' : 'IA PARA UN'}</span>
      <span className="block">{lang === 'en' ? 'FAIRER FUTURE' : 'FUTURO MÁS JUSTO'}</span>
    </span>
  )

  return (
    <div className="dot-grid min-h-screen">
      {/* Hero */}
      <HeroSection
        subtitle={i.heroSubtitle}
        title={heroTitle}
        description={i.heroDesc}
        visual={<OrbitalScene />}
        actions={
          <>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-on-primary px-8 py-3 font-brand tracking-widest text-xs font-bold hover:bg-primary-container hover:text-on-primary-container transition-colors uppercase"
            >
              {i.exploreBtn}
            </button>
            <Link
              to="/ethics"
              className="border border-primary-container/40 text-on-surface px-8 py-3 font-brand tracking-widest text-xs font-bold hover:bg-primary-container/5 transition-colors uppercase"
            >
              {i.ethicsBtn}
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
      <section className="py-32 bg-white dark:bg-surface">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-brand text-4xl md:text-6xl font-black uppercase mb-10"
          >
            {i.missionHeading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-light text-on-surface-variant leading-relaxed"
          >
            {i.missionBody}
          </motion.p>
        </div>
      </section>

      {/* Ethics Preview */}
      <ValueGrid values={coreValues} />

      <QuoteSection
        quote={t.ethics.quote}
        highlight={t.ethics.quoteHighlight}
        underline={t.ethics.quoteUnderline}
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
          {i.ctaHeading}
        </h2>
        <p className="text-on-surface-variant mb-8 max-w-lg mx-auto">{i.ctaBody}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/ethics"
            className="bg-primary text-on-primary px-10 py-3 font-brand uppercase text-[10px] tracking-[0.2em] hover:bg-primary-container hover:text-on-primary-container transition-colors"
          >
            {i.ctaEthics}
          </Link>
          <Link
            to="/team"
            className="border border-primary text-primary px-10 py-3 font-brand uppercase text-[10px] tracking-[0.2em] hover:bg-secondary-container hover:border-secondary-container hover:text-on-secondary-container transition-all"
          >
            {i.ctaTeam}
          </Link>
        </div>
      </motion.section>
    </div>
  )
}
