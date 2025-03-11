"use client"
import React, { FC, useState } from 'react'
import styles from "./assignments.module.scss";
import DashboardNavigationInterface from '@/ui/interface/DashboardNavigationInterface'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation';
import MobileMenu from '@/ui/components/dashboardMobileMenu/user/MobileMenu';

const Assignments: FC<DashboardNavigationInterface> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<any>('');
  return (
    <div className={styles.container}>
      <div className={styles.controlBar}>
        <DashboardNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </DashboardNavigation>
      </div>
      <div className={styles.searchbarWrapper}>
      </div>
      <div className={styles.contentWrapper}>
      </div>
    </div>
  )
};

export default Assignments;
