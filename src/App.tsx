import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Templates from './pages/Templates'
import Builder from './pages/Builder'
import Preview from './pages/Preview'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App