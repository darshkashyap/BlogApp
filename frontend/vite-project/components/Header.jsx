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
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-tight hover:opacity-90">
          📝 MyBlog
        </Link>

        <nav className="flex gap-6 text-lg font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
          <Link to="/allblogs" className="hover:text-yellow-300 transition">All Blogs</Link>

          {token ? (
            <>
              <Link to="/myblogs" className="hover:text-yellow-300 transition">My Blogs</Link>
              <Link to="/createblog" className="hover:text-yellow-300 transition">Create</Link>
              <button
                onClick={handleSignOut}
                className="hover:text-red-300 transition"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="hover:text-yellow-300 transition">Sign In</Link>
              <Link to="/register" className="hover:text-yellow-300 transition">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
