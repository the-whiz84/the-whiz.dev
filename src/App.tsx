import { BrowserRouter, Routes, Route } from 'react-router'
import Design1 from './pages/Design1'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Design1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
