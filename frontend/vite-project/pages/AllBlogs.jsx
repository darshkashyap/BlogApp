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
    <div className="bg-blue-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">All Blogs</h2>

        {blogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs available at the moment.</p>
        ) : (
          <div className="grid gap-6">
            {blogs.map((blog) => (
              <div key={blog._id} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-2xl font-semibold text-gray-900">{blog.title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{blog.content}</p>
                <p className="mt-4 text-sm text-gray-500 italic">Author: {blog.author}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
