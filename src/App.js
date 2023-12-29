import React  from 'react';

import Nav from './components/Nav'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Single from './components/Single'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <div className="text-center">
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
          <Route path="/single/:id" element={<Single />} />
        </Routes>
        <Footer/>
      </div>
    </div>

  )
}

export default App
