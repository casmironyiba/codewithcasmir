'use client'
import React, { FC, useRef } from 'react'
import styles from './mobileMenu.module.scss'
import DashboardNavigationInterface from '@/types/DashboardNavigationInterface'
import UserPlainLinks from '../userPlainLinks/UserPlainLinks'
import AdminPlainLinks from '@/ui/components/links/dashboard/adminPlainLinks/AdminPlainLinks'
import {LogoIcon} from '@/ui/components/Logo'

const MobileMenu: FC<DashboardNavigationInterface> = ({
  isMenuOpen,
  setIsMenuOpen,
  adminLinks,
  userLinks,
}) => {
  const menuRef = useRef<any>(null)

  const containerClass = isMenuOpen ? styles.menuOpen : styles.menuClose
  if (adminLinks) {
    return (
      <div className={`${styles.container} ${containerClass}`} ref={menuRef}>
        <div className={styles.logoWrapper}>
          <LogoIcon />
        </div>
        <AdminPlainLinks />
      </div>
    )
  } else if (userLinks) {
    return (
      <div className={`${styles.container} ${containerClass}`} ref={menuRef}>
        <div className={styles.logoWrapper}>
          <LogoIcon />
        </div>
        <UserPlainLinks />
      </div>
    )
  }
}

export default MobileMenu
