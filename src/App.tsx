import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
