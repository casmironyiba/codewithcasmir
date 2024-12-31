'use client'
import React, { useState, FC } from 'react'
import styles from './dashboard.module.scss'
import Charts from '@/ui/components/charts/Charts'
import DashboardNavigationInterface from '@/ui/interface/DashboardNavigationInterface'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation'
// import AdminMobileMenu from '@/ui/components/dashboardMobileMenu/admin/AdminMobileMenu'
import MobileMenu from '@/ui/components/dashboardMobileMenu/user/MobileMenu'
import AdminGuard from '@/ui/components/hoc/AdminGaurd'

const AdminDashboard: FC<DashboardNavigationInterface> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<any>('')

  return (
    <AdminGuard>
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
        <div className={styles.recentWrapper}>
        </div>
        <div className={styles.chartsWrapper}>
          <Charts />
        </div>
      </div>
    </AdminGuard>
  )
}

export default AdminDashboard
