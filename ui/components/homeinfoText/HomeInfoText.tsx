import React from 'react'
import styles from './homeInfoText.module.scss'

export default function HomeInfoText() {
  return (
    <div className={styles.container}>
        <h1 className={styles.text}>
          <span className={styles.white}>Become a certified </span>
          <span className={styles.green}>software engineer that will </span>
          <span className={styles.white}> lead you to work </span>
          <span className={styles.red}> any company of your choice</span>
        </h1>
      </div>
  )
}
