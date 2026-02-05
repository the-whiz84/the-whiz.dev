import { BrowserRouter, Routes, Route } from 'react-router'
import Design3 from './pages/Design3'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Design3 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
