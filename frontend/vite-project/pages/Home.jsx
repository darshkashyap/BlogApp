import React from 'react'

function Home() {
  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl bg-white shadow-md rounded-xl p-10 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-600 tracking-tight">
          Welcome to <span className="text-blue-700">MyBlog</span>
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Dive into thoughts, insights, and personal experiences.<br />
          <span className="text-blue-500 font-medium">MyBlog</span> is your window to the world of words —
          where every post is a conversation.
        </p>
      </div>
    </div>
  )
}

export default Home
