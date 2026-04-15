import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

const IndexPage = lazy(() => import('@/pages/IndexPage').then((m) => ({ default: m.IndexPage })))
const EthicsPage = lazy(() => import('@/pages/EthicsPage').then((m) => ({ default: m.EthicsPage })))
const TeamPage = lazy(() => import('@/pages/TeamPage').then((m) => ({ default: m.TeamPage })))

export function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/ethics" element={<EthicsPage />} />
            <Route path="/team" element={<TeamPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
