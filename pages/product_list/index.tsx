import Link from 'next/link'
import React from 'react'
import LayoutAdmin from '../../component/layout/admin'
import AdminPage from '../admin'

type Props = {}

const List_product = (props: Props) => {
    return (
        <div className=''>
            <div className='grid grid-cols-3 bg-gray-50'>
                <div className='col-span-2 ml-2 mt-1'>
                    <h2>Danh sách sản phầm</h2></div>

                <div className='ml-auto p-1 text-cyan-700' > 
                <button className='border-solid border-current border-2 rounded-xl w-32 text-white  bg-cyan-500'>Quay lại</button>
                </div>

            </div>
            <div className='mt-3' >
                <table className="border-solid border-current border-2 w-full">
                    <thead className='border-solid border-current border-2'>
                        <tr>
                            <th className='border-solid border-current border-2' scope="col">#</th>
                            <th className='border-solid border-current border-2' scope="col">Tên sản phẩm</th>
                            <th className='border-solid border-current border-2' scope="col">Giá</th>
                            <th className='border-solid border-current border-2' scope="col">Hình ảnh</th>
                            <th className='border-solid border-current border-2' scope="col">Mô tả</th>
                            <th className='border-solid border-current border-2' scope="col">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-solid border-current border-2'>
                            <th className='border-solid border-current border-2' scope="row">1</th>
                            <td className='border-solid border-current border-2'>Mark</td>
                            <td className='border-solid border-current border-2'>Otto</td>
                            <td className='border-solid border-current border-2'>@mdo</td>
                            <td className='border-solid border-current border-2'>@mdo</td>
                            <td className='border-solid border-current border-2'>
                                <div className='grid grid-cols-2 gap-1 p-1'>
                                    <div>
                                        <Link href="">
                                            <button className='border-solid border-current border-2 rounded-xl w-full bg-cyan-500'>Sửa</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="">
                                            <button className='border-solid border-current border-2 rounded-xl bg-red-500 w-full'>Xóa</button>
                                        </Link>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-solid border-current border-2'>
                            <th className='border-solid border-current border-2' scope="row">1</th>
                            <td className='border-solid border-current border-2'>Mark</td>
                            <td className='border-solid border-current border-2'>Otto</td>
                            <td className='border-solid border-current border-2'>@mdo</td>
                            <td className='border-solid border-current border-2'>@mdo</td>
                            <td className='border-solid border-current border-2'>
                                <div className='grid grid-cols-2 gap-1 p-1'>
                                    <div>
                                        <Link href="">
                                            <button className='border-solid border-current border-2 rounded-xl w-full bg-cyan-500'>Sửa</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="">
                                            <button className='border-solid border-current border-2 rounded-xl bg-red-500 w-full'>Xóa</button>
                                        </Link>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-solid border-current border-2'>
                            <th className='border-solid border-current border-2' scope="row">1</th>
                            <td className='border-solid border-current border-2'>Mark</td>
                            <td className='border-solid border-current border-2'>Otto</td>
                            <td className='border-solid border-current border-2'>@mdo</td>
                            <td className='border-solid border-current border-2'>@mdo</td>
                            <td className='border-solid border-current border-2'>
                                <div className='grid grid-cols-2 gap-1 p-1'>
                                    <div>
                                        <Link href="">
                                            <button className='border-solid border-current border-2 rounded-xl w-full bg-cyan-500'>Sửa</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="">
                                            <button className='border-solid border-current border-2 rounded-xl bg-red-500 w-full'>Xóa</button>
                                        </Link>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className='border-solid border-current border-2'>
                            <th className='border-solid border-current border-2' scope="row">1</th>
                            <td className='border-solid border-current border-2'>Mark</td>
                            <td className='border-solid border-current border-2'>Otto</td>
                            <td className='border-solid border-current border-2'>@mdo</td>
                            <td className='border-solid border-current border-2'>@mdo</td>
                            <td className='border-solid border-current border-2'>
                                <div className='grid grid-cols-2 gap-1 p-1'>
                                    <div>
                                        <Link href="">
                                            <button className='border-solid border-current border-2 rounded-xl w-full bg-cyan-500'>Sửa</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="">
                                            <button className='border-solid border-current border-2 rounded-xl bg-red-500 w-full'>Xóa</button>
                                        </Link>
                                    </div>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}
List_product.Layout = LayoutAdmin
export default List_product