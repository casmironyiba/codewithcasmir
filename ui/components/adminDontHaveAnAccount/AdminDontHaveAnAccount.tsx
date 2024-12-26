import React from 'react'
import Link from 'next/link';
import styles from '@/styles/components/auth/adminDontHaveAnAccount.module.scss';


export default function AdminDontHaveAnAccount() {
  return (
    <div className={styles.container}>
        <p>
          Dont have an account ? <Link href='/auth/signup/admin'>Sign Up</Link>
        </p>
    </div>
  )
};
