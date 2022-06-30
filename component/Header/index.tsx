import React from 'react'
import styles from './header.module.scss'
type Props = {}

const index = (props: Props) => {
  return (
    <div> <ul className={styles.menu}>
    <li><a href="" className={styles.menu__link}>menu 1</a></li>
    <li><a href="product" className={styles.menu__link}>menu 2</a></li>
    <li><a href="" className={styles.menu__link}>menu 3</a></li>
    <li><a href="" className={styles.menu__link}>menu 4</a></li>
</ul>
</div>
  )
}

export default index