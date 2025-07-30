import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'
import SignOut from '../pages/SignOut'
import MyBlogs from '../pages/MyBlogs'
import AllBlogs from '../pages/AllBlogs'
import CreateBlog from '../pages/CreateBlog'
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />

      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="*" element={<h1 className="text-center text-2xl  font-bold">Page Not Found</h1>} />
          <Route path="/myblogs" element={<MyBlogs />} />
          <Route path="/allblogs" element={<AllBlogs />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
