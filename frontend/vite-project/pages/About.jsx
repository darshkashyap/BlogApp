import React from 'react';
import { FaGithub } from 'react-icons/fa';

function About() {
  return (
    <div className="bg-blue-50 min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-10 text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-600 tracking-tight">
          About <span className="text-blue-700">MyBlog</span>
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          <span className="font-semibold text-blue-500">MyBlog</span> is your personal space to express, share, and connect. Whether you're a developer, designer, traveler, or thinker — your voice belongs here.
        </p>

        <p className="text-gray-600 mb-6">
          We believe every story matters. Our mission is to create a clean, modern platform that empowers everyone to share ideas easily.
        </p>

        <hr className="my-8 border-gray-200" />

        <div>
          <p className="text-md text-gray-700">
            This project is built by <span className="font-semibold text-blue-500">Darsh Kashyap</span>, a passionate developer who loves crafting intuitive user interfaces and minimal web experiences.
          </p>

          <p className="text-md text-gray-600 mt-4">Check out my GitHub profile:</p>

          <a
            href="https://github.com/darshkashyap"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-100 text-blue-700 rounded-full font-medium hover:bg-blue-200 transition"
          >
            <FaGithub className="text-lg" />
            github.com/darshkashyap
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
