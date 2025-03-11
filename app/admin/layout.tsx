'use client'
import React, { FC, useEffect } from 'react'
import styles from './layout.module.scss'
import Main from '@/ui/components/layout/Main'
import AdminLinks from '@/ui/components/links/dashboard/adminLinks/AdminLinks'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import PageLoader from '@/ui/components/Loader'
import AdminMobileController from '@/ui/components/dashboardMobileController/admin/AdminMobileController'
import GoBackButton from '@/ui/components/goBackButton/GoBackButton'

interface Props {
  children: React.ReactNode
}
const Layout: FC<Props> = ({ children }) => {
  const { user, role, isVerified, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/auth/signin/email')
      } else if (!isVerified) {
        router.push('/auth/emailverify')
      }
    }
  }, [user, role, loading, router, isVerified])

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
      <div className={styles.mainContainer}>
        <div className={styles.adminDashboardWrapper}>
          <AdminLinks />
        </div>

        <div className={styles.content}>
          <div className={styles.childrenWrapper}>
            <div className={styles.controlBar}>
              <AdminMobileController />
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

export default Layout
