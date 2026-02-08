import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import './index.css'

/**
 * Root application shell and route wiring.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
