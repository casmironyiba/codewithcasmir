'use client'
import React, { useEffect } from 'react'
import styles from './layout.module.scss';
import DashboardSidebar from '@/ui/components/dashboardSidebar/DashboardSidebar'
import NewUpdate from '@/ui/components/newUpdate/NewUpdate'
import Main from '@/ui/components/layout/Main';
import UserLinks from '@/ui/components/links/dashboard/studentLinks/StudentLinks';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import PageLoader from '@/ui/components/Loader'

export default function layout({ children }: { children: React.ReactNode }) {

  const { user, isVerified, loading } = useAuth()
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/auth/signin/email')
      } else if (!isVerified) {
        router.push('/auth/emailverify')
      }
    }
  }, [user, isVerified, loading, router])
  if (loading || !user || !isVerified) {
    return <PageLoader />
  }

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
