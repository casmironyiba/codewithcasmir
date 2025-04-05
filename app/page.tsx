'use client'
import styles from './page.module.scss'
import React from 'react'
import Landing from './(nondashboard)/landing/page'

export default function Home() {
  return (
    <div className={styles.home}>
      <Landing />
    </div>
  )
}
