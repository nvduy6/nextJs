import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'

type ProductsProps = {
  products:any[]
}

const Product = ({products}: ProductsProps) => {
  console.log("product componet",products)
  if(!products) return null;
  return (
    <div>{products.map(item=>(
      <div key={item.id}>
        <Link href={`/product/${item.id}`}>{item.name}</Link>
     </div>
    ))}</div>
  )
}
// server
export const getStaticProps:GetStaticProps<ProductsProps>=async(context)=>{
  const respone= await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)
  const data = await respone.json();
  return {
    props:{
      products:data
    }
  }
}

export default Product