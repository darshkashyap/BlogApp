
import React, { useState } from 'react';
import axios from 'axios';

const CreateBlog = () => {
  const [form, setForm] = useState({ title: '', content: '' });
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.content) {
      alert("Both fields are required");
      return;
    }

    if (!token) {
      alert("You must be logged in to post a blog.");
      return;
    }

    try {
      await axios.post('http://localhost:3001/create', form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Blog posted successfully");
      setForm({ title: '', content: '' });
    } catch (err) {
      console.error('Error posting blog:', err);
      alert("Unauthorized or server error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 mt-6">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Create a New Blog</h2>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none"
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="w-full mb-4 px-3 py-2 border rounded-md h-32 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Post Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
