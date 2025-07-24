import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Blogs from '../pages/Blogs'
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />

      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/blogs' element={<Blogs/>}/>
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
