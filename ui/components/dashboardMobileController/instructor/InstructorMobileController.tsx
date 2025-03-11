'use client'
import React, { useState } from 'react'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation'
import MobileMenu from '../../dashboardMobileMenu/MobileMenu'
import styles from './instructorMobileController.module.scss'

export default function InstructorMobileController() {
  const [isMenuOpen, setIsMenuOpen] = useState<any>('')

  return (
    <div className={styles.container}>
      <DashboardNavigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      >
        <MobileMenu
          instructorLinks
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </DashboardNavigation>
    </div>
  )
}
