import Link from 'next/link'
import React from 'react'
import styles from './header.module.scss'
type Props = {}

const index = (props: Props) => {
  return (

    <div className={styles.top}>
      <div className={styles.header}>
        <div className={styles.logo} >
          {/* logo */}
          <img  src="https://4menshop.com/logo.png?v=1"  alt="" />
        </div>
        <div className={styles.search}>
          <input type="text" name='' className='border-current mt-4 w-' />
        </div>
        <div className=''>
          <ul className={styles.nabav}>
            <li > <a href="">
              Hệ thống cửa hàng
            </a>
            </li>
            <li > <a href="">
              Liên hệ
            </a>
            </li>
            <li> <a href="">
              Giỏ
            </a>
            </li>
            <li > <a href="">
              user
            </a>
            </li>
          </ul>
        </div>
      </div>
      <ul className={styles.menu}>
        <li><Link href="/" className={styles.menu__link}>Trang chủ</Link></li>
        <li><Link href="/" className={styles.menu__link}>Giới thiệu</Link></li>
        <li><Link href="/product" className={styles.menu__link}>Sản phẩm</Link></li>
        <li><Link href="/about" className={styles.menu__link}>Khuyến mãi</Link></li>
        <li><Link href="" className={styles.menu__link}>Liên hệ</Link></li>
      </ul>
    </div>
  )
}

export default index