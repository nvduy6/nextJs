import React from 'react'
import styles from "./layout.module.scss"
import Header from '../Header'
import { LayoutProps } from '../../models/layout'
import Footer from '../Footer'
type Props = {
    children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.container}>
            <Header />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout