'use client'
import React, { FC, useState } from 'react'
import styles from './menu.module.scss'
import DashboardNavigationInterface from '@/types/DashboardNavigationInterface'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation'
import MobileControlBar from '@/ui/components/mobileControlBar/MobileControlBar'
import AdminMobileController from '@/ui/components/dashboardMobileController/user/AdminMobileController'
import { signOut } from 'next-auth/react'

const Dashboard: FC<DashboardNavigationInterface> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<any>('')
  // const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.controlBar}>
        <AdminMobileController
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
      <div className={styles.contentWrapper}>Dashboard</div>
    </div>
  )
}

export default Dashboard
