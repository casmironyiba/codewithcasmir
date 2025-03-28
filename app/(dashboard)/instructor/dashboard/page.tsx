'use client'
import React, { FC, useState } from 'react'
import styles from './menu.module.scss'
import IDashboardNavigation from '@/types/IDashboardNavigation'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation'
import MobileControlBar from '@/ui/components/mobileControlBar/MobileControlBar'
import InstructorMobileController from '@/ui/components/dashboardMobileController/instructor/InstructorMobileController'
import { signOut } from 'next-auth/react'
import GoBackButton from '@/ui/components/goBackButton/GoBackButton'

const Dashboard: FC<IDashboardNavigation> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        Dashboard
      </div>
    </div>
  )
}

export default Dashboard
