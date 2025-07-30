// src/pages/AllBlogs.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchAllBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:3001/blogs');
      setBlogs(res.data);
    } catch (err) {
      console.error('Error fetching blogs:', err);
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">All Blogs</h2>
      {blogs.length === 0 ? (
        <p className="text-gray-500">No blogs available.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="bg-white shadow rounded p-4 mb-4">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-gray-700 mt-2">{blog.content}</p>
            <p className="text-sm text-gray-400 mt-1">Author: {blog.author}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AllBlogs;
