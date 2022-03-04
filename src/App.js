
// import Blogs from './components/Blogs';
// import { BlogDetails } from './components/BlogDetails';
// import CreateBlog from "./components/CreateBlog"

// import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom"
// import { Component } from "react"
// import {Data} from './components/Data';


import React from 'react'
import { ArticleProvider } from './context/ArticleContext';
import { Blogs } from './components/Blogs';
import { BlogDetails } from './components/BlogDetails';
import { CreateBlog } from './components/CreateBlog';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, NavLink, useNavigate } from "react-router-dom";
import { Edit } from "./components/Edit"


const App = () => {
  return (
    <ArticleProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path=":id" element={<Edit />} />
          <Route path="/post" element={<CreateBlog />} />
          <Route path="post/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
    </ArticleProvider >
  )
}


export default App;
