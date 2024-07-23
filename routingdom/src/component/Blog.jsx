import React from 'react'
import Header from '../comman/Header'

import './blog.css'
import { blogs } from '../Data/Blogs'
import { Link } from 'react-router-dom'

export default function Blog() {
  console.log(blogs);
  let allBlogs = blogs.map((v,i)=>{
    return(
      <div className="blogItems border border-solid border-black p-6" key={i}>
        <h4 className='font-extrabold font-serif'>{v.title}</h4>
        <hr />
        <p className='text-left'>{v.body}</p>
        <button className='border-[2px] border-black rounded-lg p-1 px-2 mt-4'><Link to={`/Blog/${v.id}`}>Read me</Link></button>
      </div>
    )
  })

  return (
    <>
    <Header/>
    <hr className='my-3'/>
    <h1 className='font-extrabold underline font-serif'>Blog Page</h1>
  
    <div className="container grid grid-cols-3 gap-4 mx-auto px-16 py-8">
      {allBlogs}
    </div>
    </>

  )
}
