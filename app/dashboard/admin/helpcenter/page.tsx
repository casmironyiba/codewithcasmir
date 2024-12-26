"use client";
import React, { FC, useState } from 'react'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation';
import styles from "./helpcenter.module.scss";
import AdminMobileMenu from '@/ui/components/dashboardMobileMenu/admin/AdminMobileMenu';
import DashboardNavigationInterface from '@/ui/interface/DashboardNavigationInterface'

const HelpCenter: FC<DashboardNavigationInterface> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<any>('');
  return (
    <div className={styles.container}>

      <div className={styles.controlBar}>
        <div className={styles.dbNavigationWrapper}>
          <DashboardNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
            <AdminMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

          </DashboardNavigation>
        </div>

      </div>
      <div className={styles.contentWrapper}>
        admin Account helpcenter
      </div>
    </div>
  )
};

export default HelpCenter; 
