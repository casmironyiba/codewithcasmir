'use client'
import React, { FC, useRef } from 'react'
import Linker from '@/ui/components/linker/Linker';
import styles from './adminMobileMenu.module.scss'
import DashboardNavigationInterface from '@/ui/interface/DashboardNavigationInterface'


const AdminMobileMenu: FC<DashboardNavigationInterface> = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuRef = useRef<any>(null)

  const containerClass = isMenuOpen ? styles.menuOpen : styles.menuClose;

  return (

    <div className={`${styles.container} ${containerClass}`} ref={menuRef}>
      <ul className={styles.menuWrapper}>
        <li>
          <Linker href='/auth/dashboard/admin'>Dashboard</Linker>
        </li>

        <li>
          <Linker href='/auth/dashboard/admin/users'>Users</Linker>
        </li>

        <li>
          <Linker href='/auth/dashboard/admin/userenrols'>User Enrolls</Linker>
        </li>

        <li>
          <Linker href='/auth/dashboard/admin/transactions'>Transactions</Linker>
        </li>

        <li>
          <Linker href='/auth/dashboard/admin/reports'>Reports</Linker>
        </li>

        <li>
          <Linker href='/auth/dashboard/admin/accountsettings'>Account Settings</Linker>
        </li>

        <li>
          <Linker href='/auth/dashboard/admin/helpcenter'>Help Center</Linker>
        </li>

        <li>
          <Linker href='/auth/logout'>Logout</Linker>
        </li>
      </ul>

    </div>
  )
}

export default AdminMobileMenu; 
