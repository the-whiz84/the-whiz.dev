import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { SpeedInsights } from '@vercel/speed-insights/react'

const Home = lazy(() => import('./pages/Home'))
const Privacy = lazy(() => import('./pages/Privacy'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="h-screen bg-black" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Suspense>
      <SpeedInsights />
    </BrowserRouter>
  )
}

export default App
