'use client'
import HomeContent from '@/ui/components/homeContent/HomeContent'
import styles from './page.module.scss'
import React from 'react'
import Main from '@/ui/layout/main/Main'
import Landing from './(nondashboard)/landing/page'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeWrapper}>
        <Landing />
      </div>
    </div>
  )
}
