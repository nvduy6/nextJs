import Link from 'next/link'
import React from 'react'
import LayoutAdmin from '../component/layout/admin'
import AdminPage from './admin'

type Props = {}

const Add_product = (props: Props) => {
  return (
    <div className=''>
      <div className='grid grid-cols-3 bg-gray-50'>
        <div className='col-span-2 ml-2'><h2>Thêm sản phầm</h2></div>

        <div className='ml-auto p-1 text-cyan-700' > 
                <button className='border-solid border-current border-2 rounded-xl w-32 text-white  bg-cyan-500'>
                  <Link href="/admin">Quay lại</Link>
                </button>
                </div>
      </div>
      <div className='mt-3' >
        <form className='' action="">
          <div className='mt-2'>
            <div >
              <label htmlFor="">Tên sản phẩm</label>
            </div>

            <input className='mt-1 w-96 border-solid border-current border-2 ' type="text" placeholder='Tên sản phẩm' />
          </div>
          <div className='mt-2'>
            <div>
              <label htmlFor="">Giá sản phẩm</label>
            </div>
            <input className='mt-1 w-96 border-solid border-current border-2 ' type="number" placeholder='Giá sản phẩm' />
          </div>
          <div className='mt-2'>
            <div>
              <label htmlFor="">Hình ảnh sản phẩm</label>
            </div>
            <input className='mt-1 w-96 border-solid border-current border-2 ' type="text" placeholder='Ảnh sản phẩm' />
          </div>
          <div className='mt-2'>
            <div>
              <label htmlFor="">Danh mục sản phẩm</label>

            </div>
            <select className='mt-1 w-96 border-solid border-current border-2 ' name="" id="">
              <option value="">----Chọn danh mục----</option>
              <option value="">Áo cộc</option>
              <option value="">Quần dài</option>
              <option value="">Nước hoa</option>
            </select>
          </div>
          <div className='mt-2'>
            <label htmlFor="">Mô tả sản phẩm</label>
            <div></div>
            <textarea className='mt-1 w-96 border-solid border-current border-2 ' name="" id="" cols="30" rows="5"></textarea>
          </div>
          <button className='mt-1 border-solid border-current border-2 w-40 bg-lime-600 rounded-2xl'>Thêm sản phẩm</button>
        </form>
      </div>
    </div>
  )
}
Add_product.Layout = LayoutAdmin
export default Add_product