
import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

const Home = lazy(() => import('./pages/Home'))
const Privacy = lazy(() => import('./pages/Privacy'))
const SpeedInsights = lazy(() =>
  import('@vercel/speed-insights/react').then((module) => ({
    default: module.SpeedInsights,
  }))
)

/**
 * Root application shell and route wiring.
 */
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Suspense>
      {import.meta.env.PROD && (
        <Suspense fallback={null}>
          <SpeedInsights />
        </Suspense>
      )}
    </BrowserRouter>
  )
}

export default App
