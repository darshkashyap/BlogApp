import React from 'react'
import { FaGithub } from 'react-icons/fa'

function About() {
  return (
    <div className="bg-blue-50 min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">About MyBlog</h1>
        <p className="text-lg mb-6 text-gray-700">
          <span className="font-semibold text-blue-500">MyBlog</span> is a simple yet powerful platform where people from all walks of life can share their stories, experiences, and ideas with the world.
        </p>
        <p className="text-md text-gray-600 mb-6">
          Whether you're a developer, designer, traveler, or thinker — your voice belongs here.
        </p>
        <div className="border-t border-gray-200 pt-6">
          <p className="text-md text-gray-600 mb-2">
            This blog is created and maintained by <span className="text-blue-500 font-medium">Darsh Kashyap</span>, a passionate web developer who enjoys building modern and minimal user experiences.
          </p>
          <p className="text-md text-gray-600 mt-4">Check out my GitHub profile:</p>
          <a
            href="https://github.com/darshkashyap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition font-medium"
          >
            <FaGithub className="text-lg" />
            github.com/darshkashyap
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
