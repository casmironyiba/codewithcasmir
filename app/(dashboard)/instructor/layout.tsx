'use client'

import React, { useEffect } from 'react'
import styles from './layout.module.scss'
import Main from '@/ui/components/layout/Main'
import InstructorLinks from '@/ui/components/links/dashboard/instructorLinks/InstructorLinks'
import { useAuth } from '@/context/AuthContext'
import InstructorMobileController from '@/ui/components/dashboardMobileController/instructor/InstructorMobileController'
import GoBackButton from '@/ui/components/goBackButton/GoBackButton'
import { usePathname, useRouter } from 'next/navigation'
import PageLoader from '@/ui/components/Loader'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, isVerified, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleRedirect = async () => {
      if (loading) return

      if (!user) {
        router.replace('/auth/signin/email')
        return
      }

      if (!isVerified) {
        router.replace('/auth/emailverify')
      }
    }
    handleRedirect()
  }, [user, isVerified, loading, router])

  if (loading || !user || !isVerified) {
    return <PageLoader />
  }

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
                {!pathname.startsWith('/instructor/dashboard') && (
                  <GoBackButton>Go Back</GoBackButton>
                )}
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </Main>
  )
}
