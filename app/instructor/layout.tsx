'use client'
import React, { useEffect } from 'react'
import styles from './layout.module.scss'
// import DashboardSidebar from '@/ui/components/dashboardSidebar/DashboardSidebar'
import NewUpdate from '@/ui/components/newUpdate/NewUpdate'
import Main from '@/ui/components/layout/Main'
import InstructorLinks from '@/ui/components/links/dashboard/instructorLinks/InstructorLinks'
import { useAuth } from '@/context/AuthContext'
import InstructorPlainLinks from '@/ui/components/links/dashboard/instructorPlainLinks/InstructorPlainLinks'
import InstructorMobileController from '@/ui/components/dashboardMobileController/instructor/InstructorMobileController'
import GoBackButton from '@/ui/components/goBackButton/GoBackButton'
import { usePathname } from 'next/navigation'
import PageLoader from '@/ui/components/Loader'
import { useRouter } from 'next/router'

export default function layout({ children }: { children: React.ReactNode }) {
  const { user, isVerified, loading } = useAuth()
  const router = useRouter()

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

  const pathname = usePathname()
  const isDashboard = pathname.startsWith('/instructor/dashboard')

  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
    >
      <div className={styles.container}>
        <div className={styles.sidebarWrapper}>
          <InstructorLinks />
        </div>

        <div className={styles.content}>
          <div className={styles.childrenWrapper}>
            <div className={styles.controlBar}>
              <InstructorMobileController />
              <div className={styles.buttonWrapper}>
                {!isDashboard && <GoBackButton>Go Back</GoBackButton>}
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </Main>
  )
}
