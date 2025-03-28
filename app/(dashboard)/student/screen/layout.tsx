'use client'
import React, { useEffect } from 'react'
import styles from './layout.module.scss';
import DashboardSidebar from '@/ui/components/dashboardSidebar/DashboardSidebar'
import NewUpdate from '@/ui/components/newUpdate/NewUpdate'
import Main from '@/ui/components/layout/Main';
import UserLinks from '@/ui/components/links/dashboard/studentLinks/StudentLinks';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const { loading, user } = useAuth()

  // useEffect(() => {
  //   if (!loading && !user) {
  //     router.push('/auth/signin/email')
  //   }
  //
  // }, [loading, user, router])

  if (loading || !user) {
    return <p>Loading...</p>
  }
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
