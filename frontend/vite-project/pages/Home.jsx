import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/allblogs');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl bg-white/90 backdrop-blur-md shadow-xl rounded-3xl p-10 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-700 tracking-tight">
          Welcome to <span className="text-blue-900">MyBlog</span>
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Dive into <span className="text-blue-600 font-semibold">thoughts</span>, 
          insights, and personal experiences.<br />
          <span className="text-blue-500 font-bold">MyBlog</span> is your window to the world of words — 
          where every post is a <span className="italic text-blue-700">conversation</span>.
        </p>
        <button
          onClick={handleExplore}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
        >
          Start Exploring
        </button>
      </div>
    </main>
  );
}

export default Home;
