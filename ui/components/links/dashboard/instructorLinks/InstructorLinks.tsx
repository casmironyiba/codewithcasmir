import React from 'react'
import styles from './instructorLinks.module.scss'
import Linker from '@/ui/components/common/Linker'
import {
  Dashboard,
  HelpCenter,
  School,
  Settings,
} from '@mui/icons-material'
import Logout from '@/ui/components/common/Logout'
import {LogoIcon} from '@/ui/components/Logo'

export default function InstructorLinks() {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <LogoIcon width='60px' height='60px' />
      </div>

      <ul className={styles.wrapper}>
        <div className={`${styles.dashboard} ${styles.linkWrapper}`}>
          <Linker href='/instructor/dashboard' className={styles.link}>
            <Dashboard className={styles.icon} />
            <h4>Dashboard </h4>
          </Linker>
        </div>

        <div className={`${styles.mycourses} ${styles.linkWrapper}`}>
          <Linker href='/instructor/courses' className={styles.link}>
            <School className={styles.icon} />
            <h4>Courses</h4>
          </Linker>
        </div>

        <div className={`${styles.accountSettings} ${styles.linkWrapper}`}>
          <Linker
            href='/dashboard/user/accountsettings'
            className={styles.link}
          >
            <Settings className={styles.icon} />
            <h4>Account Settings</h4>
          </Linker>
        </div>

        <div className={`${styles.helpCenter} ${styles.linkWrapper}`}>
          <Linker href='/dashboard/user/helpcenter' className={styles.link}>
            <HelpCenter className={styles.icon} />
            <h4>Help Center</h4>
          </Linker>
        </div>


        <div className={`${styles.logout} ${styles.linkWrapper}`}>
          <Logout />
        </div>
      </ul>
    </div>
  )
}
