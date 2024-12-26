import Link from 'next/link'
import React from 'react'
import styles from '@/styles/components/universal/termsOfUse.module.scss';


export default function TermsOfUseLink() {
  return (
    <Link href='/termsofuse' className={styles.container}> Terms of Use </Link>
  )
}
