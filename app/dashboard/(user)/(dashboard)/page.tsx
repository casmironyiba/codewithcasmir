"use client";
import React, { FC, useState } from 'react'
import styles from "./menu.module.scss";
import DashboardNavigationInterface from '@/ui/interface/DashboardNavigationInterface'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation';
import MobileMenu from '@/ui/components/dashboardMobileMenu/user/MobileMenu';
import { signOut } from 'next-auth/react'


const Dashboard: FC<DashboardNavigationInterface> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<any>('');
  // const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.controlBar}>
        <DashboardNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </DashboardNavigation>
      </div>
      <div className={styles.contentWrapper}>
        Dashboard
      </div>
    </div>
  )
};

export default Dashboard;
