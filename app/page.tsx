'use client'
import styles from './page.module.scss'
import React from 'react'
import Landing from './(nondashboard)/landing/page'
import Footer from '@/ui/components/layout/Footer'
import NonDashboardNavbar from '@/ui/components/nonDashboardNavbar/NonDashboardNavbar'
import Main from '@/ui/components/layout/Main'

export default function Home() {
  return (
    <div className={styles.home}>
      <NonDashboardNavbar />
      <Main className={styles.main}>
        <Landing />
      </Main>
      <Footer />
    </div>
  )
}
