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
      setBlogs(prev => prev.filter(blog => blog._id !== id));
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
    <div className="bg-blue-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">My Blogs</h2>

        {blogs.length === 0 ? (
          <p className="text-center text-gray-500">You haven't written any blogs yet.</p>
        ) : (
          <div className="grid gap-6">
            {blogs.map((blog) => (
              <div key={blog._id} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-2xl font-semibold text-gray-900">{blog.title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{blog.content}</p>

                <button
                  onClick={() => handleDelete(blog._id)}
                  className="mt-6 inline-block bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBlogs;
