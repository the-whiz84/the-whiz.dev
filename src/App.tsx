import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Design1 from './pages/Design1'
import Design2 from './pages/Design2'
import Design3 from './pages/Design3'
import Design4 from './pages/Design4'
import Design5 from './pages/Design5'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<Design1 />} />
        <Route path="/2" element={<Design2 />} />
        <Route path="/3" element={<Design3 />} />
        <Route path="/4" element={<Design4 />} />
        <Route path="/5" element={<Design5 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
