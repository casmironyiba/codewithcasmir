import React from 'react'
import styles from './layout.module.scss';
import DashboardSidebar from '@/ui/components/dashboardSidebar/DashboardSidebar'
import NewUpdate from '@/ui/components/newUpdate/NewUpdate'
import Main from '@/ui/layout/main/Main';
import UserLinks from '@/ui/components/dashboardLinks/userLinks/UserLinks';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Main>
      <div className={styles.container}>
        <div className={styles.sidebarWrapper}>
          <UserLinks />
        </div>

        <div className={styles.content}>
          <div className={styles.childrenWrapper}>
            {children}
          </div>

          <div className={styles.newupdateWrapper}>
            <NewUpdate />
          </div>
        </div>
      </div>
    </Main>
  )
}
