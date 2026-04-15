import { useEffect, useState } from 'react'

const LETTERS = ['P', 'O', 'S', 'I', 'T', 'R', 'O', 'N', 'I', 'C', 'A']

export function IntroLoader() {
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    if (sessionStorage.getItem('positronica-intro-seen') === '1') {
      setMounted(false)
      return
    }
    const t = setTimeout(() => {
      sessionStorage.setItem('positronica-intro-seen', '1')
      setMounted(false)
    }, 4200)
    return () => clearTimeout(t)
  }, [])

  if (!mounted) return null

  return (
    <div className="loader-container fixed inset-0 z-[100] bg-white dark:bg-surface flex items-center justify-center pointer-events-none">
      <div className="flex gap-3 md:gap-6 overflow-hidden">
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            className="loader-letter font-technical text-lg md:text-2xl tracking-[0.8em] text-on-surface"
            style={{ animationDelay: `${(i + 1) * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}
