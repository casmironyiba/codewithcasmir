"use client"
import React, {FC,useState} from 'react'
import styles from "./activityFeeds.module.scss";
import DashboardNavigationInterface from '@/ui/interface/DashboardNavigationInterface'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation';
import MobileMenu from '@/ui/components/dashboardMobileMenu/user/MobileMenu';

const ActivityFeeds:FC<DashboardNavigationInterface> =() => {
  const [isMenuOpen, setIsMenuOpen] = useState<any>('');

  return (
    <div className={styles.container}>
      <div className={styles.controlBar}>
        <DashboardNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </DashboardNavigation>
      </div>

      <div className={styles.contentWrapper}>
          Activity feeds
      </div>
    </div>
  )
};


export default ActivityFeeds;
