import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import styles from './product.module.scss';
import useSWR from 'swr'
import userProducts from '../../hooks/use-product';
type ProductsProps = {
  products: any[]
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
const {data,error,create,mutate}=userProducts();

  // const url = `https://6110f09bc38a0900171f0ed0.mockapi.io/products`;

  // // lay du lieu tuw APi
  // const fetcher = async (url) => await (await fetch(url)).json()
  // const { data, error } = useSWR(url, fetcher, { dedupingInterval: 5000 });
  if (!data) return <div>Loading....</div>
  if (error) return <div>Failed to load</div>
  return (
    <div className='grid grid-cols-5 gap-4'>
      <div className='bg-slate-300 p-2'>
        <h2 className='text-xl'>Danh mục sản phẩm
        </h2>
        <ul>
          <li className='text-xl mt-2'>Đồ bộ</li>
          <li className='text-xl mt-2'>Đô ngủ nam</li>
          <li className='text-xl mt-2'>Đồ trẻ em</li>
          <li className='text-xl mt-2'>Công sở</li>
          <li className='text-xl mt-2'>Phụ kiện</li>
        </ul>
      </div>
      <div className='bg-slate-500 col-span-4 p-2'>
        <div className='grid grid-cols-5 gap-3'>
        {data.map((item) => (
          <div key={item.id}>  
          <Link href={`/product/${item.id}`}>     
                <img className='' src="http://bikinidolot.dichvuwordpress.com/wp-content/uploads/2020/08/bikini-8-300x400.jpg" alt="" /></Link>
                <div className='text-center mt-2 mt-2'>
                  <h3 className='text-xl'>{item.name}</h3>
                  <p>320.000 đ</p>
                </div>
            
          </div>
        ))}
        <button onClick={()=>mutate(create({name:"product A 1234"}))}>Them</button>
        </div>
       
      </div>

    </div>
  );
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