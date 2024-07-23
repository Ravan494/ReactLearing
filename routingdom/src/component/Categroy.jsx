import React, { useEffect, useState } from 'react'

export default function Categroy({finalcategories,setCategory}) {
    

    let category = finalcategories.map((v,i) => {
        return(
            <li key={i} onClick={()=>setCategory(v.name)} className='bg-[#ccc] p-[7px] cursor-pointer text-[20px] text-left font-serif font-[500] mb-2'>{v.name}</li>
        )
}) 
  return (
    <>
    <div className='fixed w-[25rem]'>
        <h3 className='text-[25px] font-[500] text-left p-0[10px]'>Product Category</h3>
        <ul className='text-left h-[70vh] overflow-y-auto'>
            {
                category
            }
            {/* <li className='bg-[#ccc] p-[7px] cursor-pointer text-[20px] text-left font-serif font-[500] mb-2'>Braclet</li> */}
        </ul>
    </div>
     </>
  )
}
