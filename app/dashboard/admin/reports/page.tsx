"use client";
import React, { FC, useState } from 'react'
import styles from "./reports.module.scss";
import DashboardNavigationInterface from '@/ui/interface/DashboardNavigationInterface'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation';
import AdminMobileMenu from '@/ui/components/dashboardMobileMenu/admin/AdminMobileMenu';

const Reports: FC<DashboardNavigationInterface> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<any>('');
  return (
    <div className={styles.container}>
      <div className={styles.controlBar}>
        <div className={styles.dbNavigationWrapper}>
          <DashboardNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} >
            <AdminMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

          </DashboardNavigation>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        Admin Reports
      </div>
    </div>
  )
};

export default Reports;
