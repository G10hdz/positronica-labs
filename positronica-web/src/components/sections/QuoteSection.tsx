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
    return parts.map((word, i) => {
      if (highlight && word.toLowerCase().includes(highlight.toLowerCase())) {
        return (
          <span key={i} className="text-primary italic">
            {word}{' '}
          </span>
        )
      }
      if (underline && word.toLowerCase().includes(underline.toLowerCase())) {
        return (
          <span key={i} className="underline decoration-secondary-container underline-offset-8 decoration-4">
            {word}{' '}
          </span>
        )
      }
      return <span key={i}>{word} </span>
    })
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="px-6 md:px-12 mb-32 md:mb-48 max-w-5xl mx-auto relative"
    >
      <div className="absolute -top-12 -left-4 text-secondary-container opacity-20 font-brand text-[120px] select-none leading-none">
        &ldquo;
      </div>
      <h2 className="font-brand font-black text-3xl md:text-5xl lg:text-6xl leading-tight text-on-surface uppercase tracking-tight">
        {renderQuote()}
      </h2>
    </motion.section>
  )
}
