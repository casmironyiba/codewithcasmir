'use client'
import React, { useState, FC } from 'react'
import styles from './dashboard.module.scss'
import Charts from '@/ui/components/charts/Charts'
import RecentTransactionLists from '@/ui/components/recentTransactionLists/RecentTransactionLists'
import DashboardNavigationInterface from '@/ui/interface/DashboardNavigationInterface'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation'
import AdminMobileMenu from '@/ui/components/dashboardMobileMenu/admin/AdminMobileMenu'
import MobileMenu from '@/ui/components/dashboardMobileMenu/user/MobileMenu'
import Card from '@/ui/components/Card'

const AdminDashboard: FC<DashboardNavigationInterface> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<any>('')

  return (
    <div className={styles.container}>
      <div className={styles.controlBar}>
        <DashboardNavigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        >
          <MobileMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            adminLinks={true}
          />
        </DashboardNavigation>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.cardWrapper}>
          <Card user />
          <Card visitors />
          <Card transactions/>
        </div>
        <div className={styles.chartsWrapper}>
          <Charts />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
