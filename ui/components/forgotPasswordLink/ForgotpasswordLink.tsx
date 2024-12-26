import React from 'react'
import Link from 'next/link';
import styles from './forgotpasswordLink.module.scss'


export default function ForgotpasswordLink() {
  return (
    <div className={styles.container}>
      <Link href='/auth/forgotpassword'>
        Forgot Password
      </Link>   
    </div>
  )
}
