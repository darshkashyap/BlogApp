import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleSignOut = () => {
    localStorage.removeItem('token');
    alert('Signed out successfully');
    navigate('/signin');
  };

  return (
    <header className="bg-white text-gray-900 shadow-md py-4 sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-600 tracking-wide hover:opacity-90 transition"
        >
          MyBlog
        </Link>

        <nav className="space-x-6 text-lg font-medium">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
          <Link to="/allblogs" className="text-gray-600 hover:text-blue-600 transition">All Blogs</Link>
          
          {token && (
            <>
              <Link to="/myblogs" className="text-gray-600 hover:text-blue-600 transition">My Blogs</Link>
              <Link to="/createblog" className="text-gray-600 hover:text-blue-600 transition">Create</Link>
              <button
                onClick={handleSignOut}
                className="text-red-600 hover:text-red-700 transition"
              >
                Sign Out
              </button>
            </>
          )}

          {!token && (
            <>
              <Link to="/signin" className="text-gray-600 hover:text-blue-600 transition">Sign In</Link>
              <Link to="/register" className="text-gray-600 hover:text-blue-600 transition">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
