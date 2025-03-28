'use client'
import React  from 'react'
// import styles from './accountSettings.module.scss'
import IDashboardNavigation from '@/types/IDashboardNavigation'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation'
// import AccountSettingsContent from '@/ui/components/content/accountSettingsContent/user/AccountSettings'
// import MobileMenu from '@/ui/components/dashboardMobileMenu/MobileMenu'
import styles from './accountSettings.module.scss'
// import UserCredentials from '@/ui/components/userCredentials/UserCredentials'
// import { auth } from '@/firebaseConfig'
// import { onAuthStateChanged, updateProfile, User } from 'firebase/auth'
// import { useRouter } from 'next/navigation'
import IUser from '@/types/IUser'
// import ProfilePicture from '@/ui/components/profilePicture/ProfilePicture'
import { useAuth } from '@/context/AuthContext'
import UserCredentials from '@/ui/components/userCredentials/UserCredentials'
import getCurrentUser from '@/lib/helpers/getCurrentUser'
import {auth} from '@/lib/helpers/firebaseConfig'
const AccountSettings = () => {
  // const { user, setUser } = useAuth()
  const user = auth.currentUser //getCurrentUser()
console.log(`curent user ${user?.metadata.lastSignInTime}`)
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <div className={styles.section3}>
        <UserCredentials user={user}/>
        </div>
      </div>
    </div>
  )
}

export default AccountSettings
