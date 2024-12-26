import React from 'react'
import styles from './pagination.module.scss'

export default function pagination() {
  return (
    <div className={styles.container}>
      <button className={`${styles.button} ${styles.prevButton}`}>Prev</button>
      <button className={`${styles.button} ${styles.nextButton}`}>Next</button>
    </div>
  )
}
