import Link from 'next/link'
import React from 'react'
import styles from './policy.module.scss'

export default function Policy() {
  return (
    <div className={styles.container}>
      <ul className={styles.wrapper}>
        <li>
          <Link href='/terms'>
            Terms of Use
          </Link>
        </li>

        <li>
          <Link href='privacy'>
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  )
}
