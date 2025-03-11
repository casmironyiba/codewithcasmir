'use client'
import React, { FC, useRef } from 'react'
import styles from './mobileMenu.module.scss'
import IDashboardNavigation from '@/types/IDashboardNavigation'
import AdminPlainLinks from '@/ui/components/links/dashboard/adminPlainLinks/AdminPlainLinks'
import InstructorPlainLinks from '../links/dashboard/instructorPlainLinks/InstructorPlainLinks'
import StudentPlainLinks from '../links/dashboard/studentPlainLinks/StudentPlainLinks'
import {LogoIcon} from '@/ui/components/Logo'

const MobileMenu: FC<IDashboardNavigation> = ({
  isMenuOpen,
  setIsMenuOpen,
  adminLinks,
  studentLinks,
  instructorLinks,
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
  } else if (studentLinks) {
    return (
      <div className={`${styles.container} ${containerClass}`} ref={menuRef}>
        <div className={styles.logoWrapper}>
          <LogoIcon />
        </div>
        <StudentPlainLinks />
      </div>
    )
  }  else if (instructorLinks) {
    return (
      <div className={`${styles.container} ${containerClass}`} ref={menuRef}>
        <div className={styles.logoWrapper}>
          <LogoIcon />
        </div>
        <InstructorPlainLinks />
      </div>
    )
  }
}

export default MobileMenu
