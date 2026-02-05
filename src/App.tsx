import { BrowserRouter, Routes, Route } from 'react-router'
import Design2 from './pages/Design2'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Design2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
