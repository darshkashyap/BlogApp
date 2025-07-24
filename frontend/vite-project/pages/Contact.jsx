import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'

function Contact() {
  return (
    <div className="bg-blue-50 min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Contact Me</h1>

        <p className="text-lg mb-6 text-gray-700">
          I'm always open to connecting with fellow developers, collaborators, or anyone curious about my work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <a
            href="mailto:dkdarshkashyap07@gmail.com"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium shadow-sm"
          >
            <FaEnvelope className="text-xl" />
            Email Me
          </a>

          <a
            href="https://github.com/darshkashyap"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium shadow-sm"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/darsh-kashyap-020163369/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium shadow-sm"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/imustbedarsh/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium shadow-sm"
          >
            <FaInstagram className="text-xl" />
            Instagram
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
