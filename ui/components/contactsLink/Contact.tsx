import React from 'react'
import Link from 'next/link';
import styles from './contact.module.scss';

export default function Contact() {
  return (
    <div className={`${styles.container}`}>
        <Link href="/contact">
          Contact
        </Link>
    </div>
  )
};
