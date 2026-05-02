import { useEffect, useState } from 'react'

const LETTERS = ['P', 'O', 'S', 'I', 'T', 'R', 'O', 'N', 'I', 'C', 'A']
const INTRO_SEEN_KEY = 'positronica-intro-seen'
const MIN_INTRO_MS = 1450
const MAX_INTRO_MS = 4200
const EXIT_MS = 520

export function IntroLoader() {
  const [mounted, setMounted] = useState(() => sessionStorage.getItem(INTRO_SEEN_KEY) !== '1')
  const [minimumElapsed, setMinimumElapsed] = useState(false)
  const [heroReady, setHeroReady] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (!mounted) return

    const markHeroReady = () => setHeroReady(true)
    const minTimer = window.setTimeout(() => setMinimumElapsed(true), MIN_INTRO_MS)
    const maxTimer = window.setTimeout(() => setExiting(true), MAX_INTRO_MS)

    window.addEventListener('positronica:hero-ready', markHeroReady)

    return () => {
      window.clearTimeout(minTimer)
      window.clearTimeout(maxTimer)
      window.removeEventListener('positronica:hero-ready', markHeroReady)
    }
  }, [mounted])

  useEffect(() => {
    if (!mounted || exiting || !minimumElapsed || !heroReady) return
    const t = window.setTimeout(() => setExiting(true), 0)
    return () => window.clearTimeout(t)
  }, [exiting, heroReady, minimumElapsed, mounted])

  useEffect(() => {
    if (!mounted || !exiting) return

    const unmountTimer = window.setTimeout(() => {
      sessionStorage.setItem(INTRO_SEEN_KEY, '1')
      setMounted(false)
    }, EXIT_MS)

    return () => window.clearTimeout(unmountTimer)
  }, [exiting, mounted])

  if (!mounted) return null

  return (
    <div
      className={`loader-container fixed inset-0 z-[100] flex items-center justify-center pointer-events-none ${exiting ? 'loader-container--exit' : ''}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(196,181,227,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.985),rgba(247,246,250,0.985))] dark:bg-[radial-gradient(circle_at_50%_42%,rgba(206,191,238,0.1),transparent_26%),linear-gradient(180deg,rgba(18,18,18,0.985),rgba(24,24,28,0.985))]" />
      <div className="relative flex flex-col items-center gap-5 overflow-hidden px-6">
        <div className="flex overflow-hidden">
          {LETTERS.map((letter, i) => (
            <span
              key={i}
              className="loader-letter font-technical text-lg tracking-[0.72em] text-on-surface md:text-2xl"
              style={{ animationDelay: `${(i + 1) * 0.09}s` }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div className="h-px w-20 bg-[linear-gradient(90deg,transparent,rgba(100,88,128,0.45),transparent)]" />
      </div>
    </div>
  )
}
