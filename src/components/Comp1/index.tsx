import React from 'react'
// import './comp1.scss'     // 全局引入

// scss模块化引入   类似vue中的scoped
import styles from "./comp1.module.scss"

export default function Comp1() {
  return (
    <div className={styles.box}>
      <p>这是Comp1里面的内容</p>
    </div>
  )
}
