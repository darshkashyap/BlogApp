import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 py-10 mt-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand / About */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600">MyBlog</h2>
          <p className="mt-3 text-sm text-gray-500">
            A platform to share your thoughts, ideas, and stories with the world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-600 transition-all">Home</Link></li>
            <li><Link to="/blogs" className="hover:text-blue-600 transition-all">Blogs</Link></li>
            <li><Link to="/about" className="hover:text-blue-600 transition-all">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition-all">Contact</Link></li>
          </ul>
        </div>

        {/* Social / Connect */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Connect with Me</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://x.com/imustbedarsh"
                className="hover:text-blue-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter / X
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/imustbedarsh/"
                className="hover:text-blue-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/darsh-kashyap-020163369/"
                className="hover:text-blue-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/darshkashyap"
                className="hover:text-blue-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-blue-500">MyBlog</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

