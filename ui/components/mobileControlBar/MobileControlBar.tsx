import React from 'react'
import DashboardNavigation from '../dashboardNavigation/DashboardNavigation'
import MobileMenu from '../dashboardMobileMenu/user/MobileMenu'
import styles from './mobileControlBar.module.scss'
import GoBackButton from '@/ui/components/goBackButton/GoBackButton'
import MobileControlBarInterface from '@/ui/interface/MobileControlBarInterface'

const MobileControlBar = ({isMenuOpen,setIsMenuOpen}:MobileControlBarInterface) => {
  return (
      <div className={styles.controlBar}>
        <DashboardNavigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        >
          <MobileMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            adminLinks
          />
        </DashboardNavigation>

        <div className={styles.adduserWrapper}>
          <GoBackButton />
        </div>
      </div>
  )
};

export default MobileControlBar;
