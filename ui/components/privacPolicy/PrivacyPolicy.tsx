import Link from 'next/link'
import React from 'react'
import styles from '@/styles/components/universal/privacyPolicy.module.scss';

export default function PrivacyPolicyLink() {
  return (
    <Link href='/privacypolicy' className={styles.container}> Privacy Privacy </Link>
  )
}
