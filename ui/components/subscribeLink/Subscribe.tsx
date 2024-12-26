import React from 'react'
import Link from 'next/link';
import styles from './subscribe.module.scss';

export default function Subscribe() {
  return (
    <div className={`${styles.container}`}>
        <Link href="/subscribe">
          Subscribe
        </Link>
    </div>
  )
};


