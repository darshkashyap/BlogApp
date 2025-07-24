import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-10 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-blue-600">MyBlog</h2>
          <p className="mt-2 text-sm text-gray-500">
            Share your thoughts, ideas, and stories with the world.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-gray-900">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link to="/blogs" className="hover:text-blue-600 transition">Blogs</Link></li>
            <li><Link to="/about" className="hover:text-blue-600 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-gray-900">Connect</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="https://x.com/imustbedarsh" className="hover:text-blue-600 transition">Twitter</a></li>
            <li><a href="https://www.instagram.com/imustbedarsh/" className="hover:text-blue-600 transition">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/darsh-kashyap-020163369/" className="hover:text-blue-600 transition">LinkedIn</a></li>
            <li><a href="https://github.com/darshkashyap" className="hover:text-blue-600 transition">Github</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
