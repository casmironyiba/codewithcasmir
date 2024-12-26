import React from 'react'
import Link from 'next/link';
import styles from './memberArea.module.scss';

export default function MemberArea() {
  return (
    <div className={styles.container}>
        <Link href="/memberarea">
          Member Area
        </Link>
    </div>
  )
};
