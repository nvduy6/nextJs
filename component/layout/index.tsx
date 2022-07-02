import React from 'react'
import styles from "./layout.module.scss"
import Header from '../Header'
type Props = {
    children: React.ReactNode
}
const Layout = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            <Header />
            {children}
        </div>
    )
}

export default Layout