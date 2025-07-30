// src/pages/MyBlogs.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchMyBlogs = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:3001/myblogs', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBlogs(res.data);
    } catch (err) {
      console.error('Error fetching my blogs:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3001/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBlogs(prev => prev.filter(blog => blog._id !== id)); // update UI
      alert('Blog deleted successfully');
    } catch (err) {
      console.error('Error deleting blog:', err);
      alert('Failed to delete blog');
    }
  };

  useEffect(() => {
    fetchMyBlogs();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">My Blogs</h2>
      {blogs.length === 0 ? (
        <p className="text-gray-500">You haven't written any blogs yet.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="bg-white shadow rounded p-4 mb-4">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-gray-700 mt-2">{blog.content}</p>
            <button
              onClick={() => handleDelete(blog._id)}
              className="mt-4 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default MyBlogs;
