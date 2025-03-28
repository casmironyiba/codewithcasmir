'use client'
import React, { FC, useState } from 'react'
import styles from './reports.module.scss'
import IDashboardNavigation from '@/types/IDashboardNavigation'
import MobileControlBar from '@/ui/components/mobileControlBar/MobileControlBar'

const Reports: FC<IDashboardNavigation> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<any>('')
  return (
    <div className={styles.container}>
      <div className={styles.controlBar}>
        <MobileControlBar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          admin
        />
      </div>
      <div className={styles.contentWrapper}>Admin Reports</div>
    </div>
  )
}

export default Reports
