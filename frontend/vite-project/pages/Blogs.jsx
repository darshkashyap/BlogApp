// Blog.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: '', content: '' });
  const [editId, setEditId] = useState(null);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:3001/blogs');
      setBlogs(res.data);
    } catch (err) {
      console.error('Error fetching blogs:', err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.content) {
      alert("Both fields are required");
      return;
    }

    try {
      if (editId) {
        await axios.put(`http://localhost:3001/blogs/${editId}`, form);
        setEditId(null);
      } else {
        await axios.post('http://localhost:3001/create', form);
      }
      setForm({ title: '', content: '' });
      fetchBlogs();
    } catch (err) {
      console.error('Error saving blog:', err);
    }
  };

  const handleEdit = (blog) => {
    setForm({ title: blog.title, content: blog.content });
    setEditId(blog._id);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/blogs/${id}`);
      fetchBlogs();
    } catch (err) {
      console.error('Error deleting blog:', err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-bold mb-4">{editId ? 'Edit Blog' : 'Create Blog'}</h2>
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
          {editId ? 'Update' : 'Post'}
        </button>
      </form>

      <div>
        {blogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs available.</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog._id} className="bg-gray-100 p-4 rounded-lg shadow mb-4">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-gray-700 mt-2">{blog.content}</p>
              <div className="flex gap-4 mt-3">
                <button
                  onClick={() => handleEdit(blog)}
                  className="text-yellow-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
