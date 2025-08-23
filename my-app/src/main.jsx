import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './components/Home.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
)
