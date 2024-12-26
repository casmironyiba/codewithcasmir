import React from 'react'
import styles from './studentsClassImg.module.scss';
import Image from 'next/image';

export default function StudentsClassImg() {
  return (
    <div className={styles.container}>
      <Image
        src={'/images/image5.jpg'}
        alt=''
        width={300}
        height={300}
      />
    </div>
  )
}
