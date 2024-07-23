import React from 'react'
import Header from '../comman/Header'
import { useLocation } from 'react-router-dom';
import { blogs } from '../Data/Blogs';

export default function BlogDetails() {
  let uselocation = useLocation()
  let correntId = uselocation.pathname.split('/')[2]
  let courrentData = blogs.find(item => item.id == correntId)
  console.log(courrentData);
  return (
    <>
    <Header/>
    <hr className='my-3'/>
    <div className='font-extrabold underline font-serif'>BlogDetails</div>
    <h1>{courrentData.title}</h1>
    <h5>{courrentData.body}</h5>
    </>
  )
}
