import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import styles from './product.module.scss';
type ProductsProps = {
  products:any[]
}

const Product = ({products}: ProductsProps) => {
  console.log("product componet",products)
  if(!products) return null;
  return (
    <div className={styles.product}>{products.map(item=>(
      <div key={item.id} className={styles.product__item}>
        <img src={item.avatar} className={styles.product__image}/>
        <div className={styles.product__name}>
        <Link href={`/product/${item.id}`}>{item.name}</Link>
        <p>{item.createdAt}</p>
        </div>
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
      products:data.map((item:any)=>({id:item.id,name:item.name,avatar:item.avatar,}))
    },
    revalidate:5
  }
}

export default Product