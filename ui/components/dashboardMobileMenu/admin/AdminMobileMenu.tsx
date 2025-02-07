'use client'
import React, { FC, useRef } from 'react'
import Linker from '@/ui/components/common/Linker';
import styles from './adminMobileMenu.module.scss'
import DashboardNavigationInterface from '@/types/DashboardNavigationInterface'
import Logout from '@/ui/components/common/Logout'

const AdminMobileMenu: FC<DashboardNavigationInterface> = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuRef = useRef<any>(null)

  const containerClass = isMenuOpen ? styles.menuOpen : styles.menuClose;

  return (

    <div className={`${styles.container} ${containerClass}`} ref={menuRef}>
      <ul className={styles.menuWrapper}>
        <li>
          <Linker href='/admin/dashboard'>Dashboard</Linker>
        </li>

        <li>
          <Linker href='/admin/users'>Users</Linker>
        </li>

        <li>
          <Linker href='/admin/userenrols'>User Enrolls</Linker>
        </li>

        <li>
          <Linker href='/admin/transactions'>Transactions</Linker>
        </li>

        <li>
          <Linker href='/admin/reports'>Reports</Linker>
        </li>

        <li>
          <Linker href='/admin/accountsettings'>Account Settings</Linker>
        </li>

        <li>
          <Linker href='/admin/helpcenter'>Help Center</Linker>
        </li>

        <li>
          <Logout />
        </li>
      </ul>

    </div>
  )
}

export default AdminMobileMenu; 
