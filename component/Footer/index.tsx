import React from 'react'
import styles from './footer.module.scss'
type Props = {}

const Footer = (props: Props) => {
    return (
        <div>
            <footer className=' h-58' >
                <div className= {styles.footer}>

                    <ul>
                        <li><h3>logo</h3></li>
                        <li>Sđt:09xxxxxx</li>
                        <li>Email:duynvph@gmail</li>

                    </ul>

                    <ul>
                        <li><h3 className='text-xl font-semibold mt-4'>Dịch vụ</h3></li>
                        <li>News</li>
                        <li>Khuyến mãi</li>
                        <li>Ưu đãi đối tác</li>
                        <li>Đổi trả</li>
                    </ul>
                    <ul>
                        <li><h3 className='text-xl font-semibold mt-4'>Sản phẩm</h3></li>
                        <li>News</li>
                        <li>Khuyến mãi</li>
                        <li>Ưu đãi đối tác</li>
                        <li>Đổi trả</li>
                    </ul>
                    <ul>
                        <li><h3 className='text-xl font-semibold mt-4'>Hệ thống cửa hàng</h3></li>
                        <li><img src=" https://4menshop.com/images/footer-map.jpg" alt="" /></li>
                        <li>Tìm địa chỉ cửa hàng gần bạn</li>

                    </ul>
                </div>
                <div className= {styles.copyright}>
                    <h2 className=' text-center'>Copyright 2022 © Thiết kế website </h2>
                </div>
            </footer>

        </div>
    )
}

export default Footer