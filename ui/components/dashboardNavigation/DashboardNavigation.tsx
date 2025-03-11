import React, { FC } from 'react'
import styles from './dashboardNavigation.module.scss'
import { DashboardMenuButton } from '../DashboardMenuButton'
import IDashboardNavigation from '@/types/IDashboardNavigation'

const AdminDashboardNavigation: FC<IDashboardNavigation> = ({
  isMenuOpen,
  setIsMenuOpen,
  children,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <DashboardMenuButton
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>

      <div className={styles.mobilemenuWrapper}>{children}</div>
    </div>
  )
}

export default AdminDashboardNavigation
