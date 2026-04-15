import { createContext, useContext, useState, type ReactNode } from 'react'
import translations, { type Lang, type TranslationKeys } from './translations'

interface LanguageCtx {
  lang: Lang
  toggle: () => void
  t: TranslationKeys
}

const LanguageContext = createContext<LanguageCtx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lang') as Lang) ?? 'en'
    }
    return 'en'
  })

  const toggle = () => {
    setLang((prev) => {
      const next: Lang = prev === 'en' ? 'es' : 'en'
      localStorage.setItem('lang', next)
      return next
    })
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: translations[lang] as TranslationKeys }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}
