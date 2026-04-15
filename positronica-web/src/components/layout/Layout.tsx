import { Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'
import { Footer } from './Footer'
import { IntroLoader } from './IntroLoader'

export function Layout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-primary focus:text-on-primary focus:px-4 focus:py-2 focus:font-brand focus:text-xs focus:tracking-widest focus:uppercase"
      >
        Skip to main content
      </a>
      <IntroLoader />
      <NavBar />
      <main id="main-content" className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
