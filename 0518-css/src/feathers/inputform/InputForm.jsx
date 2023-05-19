import React from 'react'
import styles from './inputform.module.css'

export default function InputForm() {
  return (
    <div>
      <p className={styles.color}>
        {styles.color}
      </p>
      <a className={`${styles.color} App-link`} href='/'>
        app에 있는 css를 가져옵니다
      </a>
    </div>
  )
}
