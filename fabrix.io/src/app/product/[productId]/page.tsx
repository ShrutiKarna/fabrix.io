import React from 'react'
// interface ProductPageProps{
//     params:{
//         productid:string;
//     }
// }

// async function ProductPage({params}:ProductPageProps){
//     const res= await fetch(`https://dummyjson.com/products/${params.productId}`);
//     if(!res)
// }

const ProductPage = () => {
  return (
    <div className='lg:mx-24 mb-6 flex flex-col gap-5'>
        {/* Product Image With its Description */}
        <div className='flex justify-between'>
            <div>Image</div>
            <div>Description</div>
        </div>
        <div>Review section </div>
        <div> Suggested product section</div>
    </div>
  )
}

export default ProductPage