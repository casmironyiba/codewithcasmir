import React from 'react'
import styles from './socialProfiles.module.scss'
import { FacebookRounded, Instagram, Telegram, Twitter, YouTube, } from '@mui/icons-material'
import Link from 'next/link'
export default function SocialProfiles() {
  return (
    <div className={styles.container}>
      <ul className={styles.wrapper}>
        <li>
          <Link href='/youtube'>
            <YouTube />
          </Link>
        </li>

        <li>
          <Link href='/youtube'>
            <FacebookRounded />
          </Link>
        </li>

        <li>
          <Link href='/youtube'>
            <Twitter />
          </Link>
        </li>

        <li>
          <Link href='/youtube'>
            <Instagram />
          </Link>
        </li>

        <li>
          <Link href='/youtube'>
            <Telegram />
          </Link>
        </li>
      </ul>
    </div>
  )
}
