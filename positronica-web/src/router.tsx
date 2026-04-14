import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { IndexPage } from '@/pages/IndexPage'
import { EthicsPage } from '@/pages/EthicsPage'
import { TeamPage } from '@/pages/TeamPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/ethics" element={<EthicsPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
