import React from 'react'
import Header from '../comman/Header'

import './blog.css'
import { blogs } from '../Data/Blogs'
import { Link } from 'react-router-dom'

export default function Blog() {
  let allBlogs = blogs.map((v,i)=>{
    return(
      <div className="blogItems" key={i}>
        <h4>{v.title}</h4>
        <hr />
        <p>{v.body}</p>
        <button><Link to={`/Blog/${v.id}`}>Read me</Link></button>
      </div>
    )
  })

  return (
    <>
    <Header/>
    <h1>Blog Page</h1>
  
    <div className="container">
      {allBlogs}
    </div>
    </>

  )
}
