import React, { useEffect, useState } from 'react'
import Header from '../comman/Header'
import Categroy from './Categroy'
import Products from './Products'
import axios from 'axios'

export default function Product() {
  let [isLoding,setIsLoding] = useState(true);
  let [finalcategories,setfinalCategory] = useState([]);
  let [finalProduct,setfinalProduct] = useState([]);
  let [category,setCategory] = useState('');

    let Category = ()=>{
      setIsLoding(true);

        axios.get('https://dummyjson.com/products/categories')
        .then((res) =>res.data)
        .then((cat)=>{
            setfinalCategory(cat);
            // console.log(finalcategories);
            // console.log(cat);
        });  
    }  
    let Product = ()=>{

      fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((pro)=>{
        // console.log(pro.products);
        setfinalProduct(pro.products);
      }); 
      setIsLoding(false)
    }  
    useEffect(()=>{
      Category();
      Product();
    },[])

    useEffect(()=>{
      if(category!=='')
      {
        setIsLoding(true);
        fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((pro)=>{
        // console.log(pro.products);
        setfinalProduct(pro.products);
      }); 
      setIsLoding(false)
      }
    },[category])
    let ProductItem = finalProduct.map((v,i)=>{
      return(
        <Products key={i} pdata={v}/>
      )
    })
    console.log(finalProduct.length);
  return (
    <>
            <img className={`w-[100%] fixed z-10 top-0 bottom-0 h-[100vh] object-contain bg-[rgba(0,0,0,0.3)] ${isLoding ? '' : 'hidden'}`} src="https://th.bing.com/th/id/R.8fa41da1f4602b875dfe2ba5a3aff509?rik=CFhqLN6OVxIqkw&riu=http%3a%2f%2fclipart-library.com%2fimages%2f8cEbXkpLi.gif&ehk=dsjAdw1MsUpwICSCUvUW94MFeiU8yCijH1v2U6Dudig%3d&risl=&pid=ImgRaw&r=0" alt="" />

    <Header/>

    <div className='py-3'>
        <div className="max-w-[1320px] mx-auto">
            <h1 className='text-center text-[40px] font-bold mb-4'>
            Our Product
            </h1>
            <hr />
            <div className="grid grid-cols-[30%_auto] gap-4">
                
                    <div className="">
                <Categroy finalcategories={finalcategories} setCategory={setCategory}/>
                </div>
                <div> 
                    <div className="grid grid-cols-3 gap-4">
                       {finalProduct.length>=1 ?
                       ProductItem :
                       <h1 className='text-[20px] text-center justify-center  text-center'>No Product Found</h1>
                      }
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    </>
  )
}