import React from 'react'
import styles from './admin.module.scss'
import { LayoutProps } from '../../models/layout'
import Link from 'next/link'
type Props = {
  children: React.ReactNode
}

const LayoutAdmin = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <div className= {styles.header}>
        <div>
          <h2 className={styles.logo}>Quản trị WebSite</h2>
        </div>
        <div>
          <h2 className={styles.name}>Admin: Duy</h2>
          </div>
      </div>
      <div className='grid grid-cols-5 gap-4'>
        <div className={styles.sidebar} >
          <ul>
            <li className='text-xl hover:opacity-0 text-white'><Link href="/add_product">Trang chủ</Link></li>
            <li className='text-xl mt-4 hover:opacity-0 text-white'><Link href="">Sản phẩm</Link></li>
            <li className='text-xl mt-4 hover:opacity-0 text-white'><Link href="">Tin tức</Link></li>
            <li className='text-xl mt-4 hover:opacity-0 text-white'><Link href="">Danh mục</Link></li>
            <li className='text-xl mt-4 hover:opacity-0 text-white'><Link href="">Đơn hàng</Link></li>
            <li className='text-xl mt-4 hover:opacity-0 text-white'><Link href="/">Vào website</Link></li>
            
          </ul>
        </div>
        <div className=' col-span-4 p-2 '>
          {children}

        </div>

      </div>

    </div>

  )
}

export default LayoutAdmin