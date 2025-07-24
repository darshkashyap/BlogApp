import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white text-gray-900 shadow-md py-4 sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold text-blue-600 tracking-wide hover:opacity-90 transition">
          MyBlog
        </Link>
        <nav className="space-x-6 text-lg font-medium">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
          <Link to="/blogs" className="text-gray-600 hover:text-blue-600 transition">Blogs</Link>    
        </nav>
      </div>
    </header>
  )
}

export default Header
