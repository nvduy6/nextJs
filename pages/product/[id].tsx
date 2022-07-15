import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router'
import React from 'react'

type ProductProps = {
  product: any;
}

const ProductDetail = ({ product }: ProductProps) => {
  if (!product) return null;
  return (
    <div className='grid grid-cols-3 gap-5 mb-4' >
      <div className='bg-slate-400'><img className='w-full' src="http://bikinidolot.dichvuwordpress.com/wp-content/uploads/2020/08/bikini-8-300x400.jpg" alt="" /></div>
      <div className='col-span-2'>
        <h2 className='text-2xl font-semibold'>{product.name}</h2>
        <p>Giá: 23000 đ</p>
        <p>Liền thân khoét eo viề kim tuyến, sang chảnh, làm nổi bật set đồ và cho người mặc, mút nâng nhẹ có khe nhét thêm mút nếu muốn. Chất liệu co giãn tốt tuyệt đối khi thấm nước.</p>
        <div>
          <h2>Màu sắc</h2>
          <ul className='flex space-x-2'>
            <li>Đen</li>
            <li>Trắng</li>
            <li>Đỏ</li>
            <li>Vàng</li>
          </ul>
        </div>
        <div>
          <h2>Size</h2>
          <ul className='flex space-x-2'>
            <li>L</li>
            <li>M</li>
            <li>S</li>
            <li>Xl</li>
          </ul>
        </div>
        <div>
          <input className='w-10 h-10 bg-slate-300 text-center' type="submits" value="+" name="" id="" />
          <input className='w-10 h-10 border-solid border-2 text-center' type="text" name="" id="" value="0" />
          <input className='w-10 h-10 bg-slate-300 text-center' type="submits" value="-" name="" id="" />

      <button className='border-solid border-2 rounded-xl ml-10 mt-2 w-52 h-10 bg-neutral-600 text-white hover:opacity-80 '>Thêm vào giỏ hàng</button>
      </div>
      </div>
      
      
      </div>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json();
  const paths = data.map((product:any) => (
    { params: { id: product.id } }
  ))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
  const product = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params?.id}`)).json();
  return {
    props: { product },
    revalidate:10
  }
}
export default ProductDetail