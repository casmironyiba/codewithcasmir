import React from 'react'
import Link from 'next/link'
import { ArrowRightAlt } from '@mui/icons-material'
import styles from './enroll.module.scss'
import SignupLink from '../links/signupLink/SignupLink'

export default function Enroll() {
  return (
    <div className={styles.container}>
      <h3 className={styles.textWrapper}>
        <span className={styles.yellow}>All the </span>
        <span className={styles.white}> coding courses </span>
        <span className={styles.yellow}>you to excel </span>
        <span className={styles.white}>are in one place. </span>
      </h3>
      <SignupLink className={styles.link}>
        GET STARTED (FREE)
        <ArrowRightAlt />
      </SignupLink>
    </div>
  )
}
