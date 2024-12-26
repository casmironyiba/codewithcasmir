'use client'
import React, { FC, useRef, useState, useEffect } from 'react'
import styles from './layout.module.scss'
// import Imager from '@/ui/components/imager/Imager'
import Main from '@/ui/layout/main/Main'
// import AdminDashboardSidebar from '@/ui/components/adminDashboardSidebar/AdminDashboardSidebar'
import NewUpdate from '@/ui/components/newUpdate/NewUpdate'
// import MobileMenu from '@/ui/components/mobileMenu/MobileMenu';
// import DashboardMenu from '@/ui/components/dashboardMenu/DashboardMenu';
import AdminLinks from '@/ui/components/dashboardLinks/adminLinks/AdminLinks'

interface Props {
  children: React.ReactNode
}
const Layout: FC<Props> = ({ children }) => {
  const menuRef = useRef<any>(null)
  const [isMenuOpen, setIsMenuOpen] = useState<any>('')

  return (
    <Main>
      <div className={styles.mainContainer}>
        <div className={styles.adminDashboardWrapper}>
          <AdminLinks />
        </div>

        <div className={styles.content}>
          <div className={styles.childrenWrapper}>{children}</div>

          <div className={styles.newupdateWrapper}>
            <NewUpdate />
          </div>
        </div>
      </div>
    </Main>
  )
}

export default Layout
