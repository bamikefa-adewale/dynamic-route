import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import ConatctUs from './pages/ConatctUs'
import NavbarComponent from './components/layouts/NavbarComponent'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ConatctUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
