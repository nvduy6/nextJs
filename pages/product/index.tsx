import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import styles from './product.module.scss';
import useSWR from 'swr'
type ProductsProps = {
  products:any[]
}
// client
const Product = () => {
  // console.log("product componet",products)
  // if(!products) return null;
  // return (
  //   <div className={styles.product}>{products.map(item=>(
  //     <div key={item.id} className={styles.product__item}>
  //       {/* <img src={item.avatar} className={styles.product__image}/> */}
  //       <div className={styles.product__name}>
  //       <Link href={`/product/${item.id}`}>{item.name}</Link>
  //       {/* <p>{item.createdAt}</p> */}
  //       </div>
  //    </div>
  //   ))}</div>
  // )

const url = `https://6110f09bc38a0900171f0ed0.mockapi.io/products`;

// lay du lieu tuw APi
const fetcher = async(url)=>await(await fetch(url)).json()
const { data, error } = useSWR(url, fetcher, { dedupingInterval: 5000});
if(!data) return <div>Loading....</div>
if(error)return <div>Failed to load</div>
return (
  <div>
    {data.map((item)=>(
      <div key={item.id}>
        {item.name}
      </div>
    ))}
  </div>
)
}



// server
// export const getStaticProps:GetStaticProps<ProductsProps>=async(context: GetStaticPropsContext)=>{
//   const respone= await fetch(`https://jsonplaceholder.typicode.com/users`)
//   const data = await respone.json();
//   return {
//     props:{
//       products:data.map((item:any)=>({id:item.id,name:item.name}))
//     },
//     revalidate:5
//   }
// }

export default Product