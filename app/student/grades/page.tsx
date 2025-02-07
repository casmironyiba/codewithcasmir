'use client'
import React, { FC, useState } from 'react'
import styles from "./grades.module.scss";
import DashboardNavigationInterface from '@/ui/interface/DashboardNavigationInterface'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation';
import MobileMenu from '@/ui/components/dashboardMobileMenu/user/MobileMenu';

const Grades: FC<DashboardNavigationInterface> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<any>('');

  return (
    <div className={styles.container}>
      <div className={styles.controlBar}>
        <DashboardNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </DashboardNavigation>
      </div>
      <div className={styles.contentWrapper}>
        Grades
      </div>
    </div>
  )
}

export default Grades;
