import React from 'react'
import Link from 'next/link';
import styles from './courses.module.scss';

export default function Courses() {
  return (
    <div className={styles.container}>
        <Link href="/courses">
          Courses
        </Link>
    </div>
  )
};
