import { motion } from 'framer-motion'

interface QuoteSectionProps {
  quote: string
  highlight?: string
  underline?: string
}

export function QuoteSection({ quote, highlight, underline }: QuoteSectionProps) {
  const renderQuote = () => {
    if (!highlight && !underline) return quote

    const parts = quote.split(' ')
    return parts.map((word, index) => {
      if (highlight && word.toLowerCase().includes(highlight.toLowerCase())) {
        return (
          <span key={index} className="text-primary italic">
            {word}{' '}
          </span>
        )
      }
      if (underline && word.toLowerCase().includes(underline.toLowerCase())) {
        return (
          <span key={index} className="underline decoration-secondary-container underline-offset-8 decoration-4">
            {word}{' '}
          </span>
        )
      }
      return <span key={index}>{word} </span>
    })
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden px-6 py-28 md:px-12 md:py-44"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(255,207,236,0.14),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl">
        <h2 className="font-brand text-[clamp(2.6rem,7.4vw,7.8rem)] font-bold uppercase leading-[0.9] tracking-[-0.03em] text-balance text-on-surface">
          {renderQuote()}
        </h2>

        <div
          aria-hidden="true"
          className="pointer-events-none mt-6 select-none text-right font-signal text-[clamp(4rem,10vw,11rem)] leading-none text-secondary-container opacity-15"
        >
          &rdquo;
        </div>
      </div>
    </motion.section>
  )
}
