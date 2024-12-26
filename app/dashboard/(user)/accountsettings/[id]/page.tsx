"use client"
import React, { FC, useState } from 'react'
import styles from "./accountSettings.module.scss";
import DashboardNavigationInterface from '@/ui/interface/DashboardNavigationInterface'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation';
import AccountSettingsContent from '@/ui/content/accountSettingsContent/user/AccountSettings'
import MobileMenu from '@/ui/components/dashboardMobileMenu/user/MobileMenu';

const AccountSettings: FC<DashboardNavigationInterface> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<any>('');

  return (
    <div className={styles.container}>
      <div className={styles.controlBar}>
        <DashboardNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </DashboardNavigation>
      </div>
      <div className={styles.contentWrapper}>
        <AccountSettingsContent />
      </div>
    </div>
  )
};

export default AccountSettings
