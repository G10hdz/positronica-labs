import { HeroSection } from '@/components/sections/HeroSection'
import { FounderCards } from '@/components/sections/FounderCards'
import { CurrentFocus } from '@/components/sections/CurrentFocus'
import { Timeline } from '@/components/sections/Timeline'
import { RepoStatusGrid } from '@/components/sections/RepoStatusGrid'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function TeamPage() {
  return (
    <div className="dot-grid min-h-screen">
      <HeroSection
        subtitle="> STATUS: PROTOCOL_ACTIVE"
        title="THE MINDS BEHIND THE LAB"
        description="> BUILT_BY_WOMEN_FOR_EVERYONE"
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
          JOIN THE EXPERIMENT
        </h2>
        <p className="max-w-2xl mx-auto text-on-surface-variant mb-12 leading-relaxed">
          We are constantly seeking brilliant minds to join our collaborative research sessions. If you are passionate about the intersection of ethics and technology, let&apos;s connect.
        </p>
        <Link
          to="/ethics"
          className="inline-block bg-gradient-to-r from-primary to-secondary-container text-white px-14 py-5 font-brand tracking-[0.3em] uppercase text-sm hover:scale-105 transition-transform"
        >
          INITIATE_CONTACT
        </Link>
      </motion.section>
    </div>
  )
}
