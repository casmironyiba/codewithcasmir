import React from 'react'
import Link from 'next/link';
import styles from './forum.module.scss';

export default function Forum() {
  return (
    <div className={`${styles.container}`}>
        <Link href="/forum">
          Forum
        </Link>
    </div>
  )
};
