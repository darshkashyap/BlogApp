import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'

function Contact() {
  return (
    <div className="bg-blue-50 min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-10 text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-600 tracking-tight">
          Get in Touch
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          I'm always open to collaboration, freelance work, or just a friendly conversation. Feel free to reach out through any platform below!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="mailto:dkdarshkashyap07@gmail.com"
            className="flex items-center justify-center gap-3 px-5 py-4 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-600 hover:text-white transition shadow-sm"
          >
            <FaEnvelope className="text-xl" />
            <span>Email</span>
          </a>

          <a
            href="https://github.com/darshkashyap"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-5 py-4 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-600 hover:text-white transition shadow-sm"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/darsh-kashyap-020163369/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-5 py-4 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-600 hover:text-white transition shadow-sm"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://www.instagram.com/imustbedarsh/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-5 py-4 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-600 hover:text-white transition shadow-sm"
          >
            <FaInstagram className="text-xl" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
