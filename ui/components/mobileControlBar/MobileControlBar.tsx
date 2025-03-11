import React from 'react'
import DashboardNavigation from '../dashboardNavigation/DashboardNavigation'
import MobileMenu from '../dashboardMobileMenu/MobileMenu'
import styles from './mobileControlBar.module.scss'
import GoBackButton from '@/ui/components/goBackButton/GoBackButton'
import IMobileControlBar from '@/types/IMobileControlBar'

const MobileControlBar = ({
  isMenuOpen,
  setIsMenuOpen,
  admin,
  instructor,
  student,
}: IMobileControlBar) => {
  if (admin) {
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
          <GoBackButton>Go Back </GoBackButton>
        </div>
      </div>
    )
  } else if (instructor) {
    return (
      <div className={styles.controlBar}>
        <DashboardNavigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        >
          <MobileMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            instructorLinks
          />
        </DashboardNavigation>

        <div className={styles.adduserWrapper}>
          <GoBackButton>Go Back </GoBackButton>
        </div>
      </div>
    )
  } else if (student) {
    return (
      <div className={styles.controlBar}>
        <DashboardNavigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        >
          <MobileMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            studentLinks
          />
        </DashboardNavigation>

        <div className={styles.adduserWrapper}>
          <GoBackButton>Go Back </GoBackButton>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default MobileControlBar
