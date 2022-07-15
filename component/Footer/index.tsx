import React from 'react'
import styles from './footer.module.scss'
type Props = {}

const Footer = (props: Props) => {
    return (
        <div>
            <footer className=' h-58' >
                <div className={styles.footer}>

                    <ul>
                        <li className='mt-3'>
                            <img src="https://4menshop.com/logo.png?v=1" alt="" />
                        </li>
                        <li className='text-xl mt-2'>Sđt:09xxxxxx</li>
                        <li className='text-xl mt-2'>Email:duynvph@gmail</li>

                    </ul>

                    <ul>
                        <li><h3 className='text-xl font-semibold mt-4'>Dịch vụ</h3></li>
                        <li className='text-xl mt-2'>News</li>
                        <li className='text-xl mt-2'>Khuyến mãi</li>
                        <li className='text-xl mt-2'>Ưu đãi đối tác</li>
                        <li className='text-xl mt-2'>Đổi trả</li>
                    </ul>
                    <ul>
                        <li><h3 className='text-xl font-semibold mt-4'>Sản phẩm</h3></li>
                        <li className='text-xl mt-2'>News</li>
                        <li className='text-xl mt-2'>Khuyến mãi</li>
                        <li className='text-xl mt-2'>Ưu đãi đối tác</li>
                        <li className='text-xl mt-2'>Đổi trả</li>
                    </ul>
                    <ul>
                        <li><h3 className='text-xl font-semibold mt-4'>Hệ thống cửa hàng</h3></li>
                        <li><img src=" https://4menshop.com/images/footer-map.jpg" alt="" /></li>
                        <li className='text-xl mt-2'>Tìm địa chỉ cửa hàng gần bạn</li>

                    </ul>
                </div>
                <div className={styles.copyright}>
                    <h2 className=' text-center'>Copyright 2022 © Thiết kế website </h2>
                </div>
            </footer>

        </div>
    )
}

export default Footer