
import { BrowserRouter, Routes, Route } from 'react-router'
import { SpeedInsights } from "@vercel/speed-insights/react"
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import './index.css'

/**
 * Root application shell and route wiring.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <SpeedInsights />
    </BrowserRouter>
  )
}

export default App
