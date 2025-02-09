'use client'
import React from 'react'
import styles from "./addUser.module.scss";
import AddUserForm from '@/ui/components/forms/addUserForm/AddUserForm'
import AdminMobileController from '@/ui/components/dashboardMobileController/admin/AdminMobileController';

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.controlBar}>
          <AdminMobileController  />
      </div>

      <div className={styles.contentWrapper}>
        <AddUserForm />
      </div>
    </div>

  )
}
