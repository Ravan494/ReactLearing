import React from 'react'

export default function Products({pdata}) {
//   let [product ,setProduct] = useState([])
//   useEffect(()=>{
//     fetch('https://dummyjson.com/products/search?q=phone')
// .then(res => res.json())
// .then((result)=>{
//   setProduct(result.products);
//   // console.log(result.products);
//   // console.log(product);
// });
//   },[])

  return (
    <>
    {/* {
      product.map((product,index)=>{
        return (
          <div className="shadow-lg" key={index}>
            <img className='aspect-square object-contain' src={product.images[0]} alt="product" />
            <h3 className="text-center text-2xl font-bold">{product.title}</h3>
          </div>
        )
      })
    } */}
    <div className="group">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  
                  src={pdata.thumbnail}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{pdata.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">&#8377;{pdata.price}</p>
    </div>


    {/* <div className="shadow-[0px_0px_10px_black]">
              <img loading='lazy' className='aspect-square object-contain' src={pdata.thumbnail} alt="product" />
              <h3 className="text-center text-2xl font-bold">{pdata.title}</h3>
              <b>{pdata.price}</b>
            </div> */}
    
    </>
  )
}
