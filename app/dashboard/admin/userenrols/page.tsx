"use client"
import React, { FC, useState } from 'react'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation';
import styles from "./userEnrols.module.scss";
import DashboardNavigationInterface from '@/ui/interface/DashboardNavigationInterface'
import AdminMobileMenu from '@/ui/components/dashboardMobileMenu/admin/AdminMobileMenu';

const UserEnroll: FC<DashboardNavigationInterface> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<any>('');
  return (
    <div className={styles.container}>
      <div className={styles.controlBar}>
        <div className={styles.dbNavigationWrapper}>
          <DashboardNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
            <AdminMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </DashboardNavigation>
        </div>
        <div className={styles.searchbarWrapper}>
          Searchbar
        </div>
      </div>
      <div className={styles.contentWrapper}>
        Users Enrols
      </div>
    </div>
  )
}

export default UserEnroll;
