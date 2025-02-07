'use client'
import React,{useState} from 'react'
import Linker from '@/ui/components/common/Linker';
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation';
import AdminMobileMenu from '@/ui/components/dashboardMobileMenu/admin/AdminMobileMenu';
import styles from "./addUser.module.scss";

import AddUserForm from '@/ui/components/forms/addUserForm/AddUserForm'
export default function page() {
  const [isMenuOpen, setIsMenuOpen] = useState<any>('');
  return (
    <div className={styles.container}>
      <div className={styles.controlBar}>
        <DashboardNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
          <AdminMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </DashboardNavigation>
      </div>

      <div className={styles.contentWrapper}>
        <AddUserForm />
      </div>
    </div>

  )
}
