import React from 'react'
import Linker from '../../linker/Linker'
import styles from './adminLinks.module.scss'
import Imager from '../../imager/Imager'
import {
  Dashboard,
  HelpCenter,
  VerifiedUser,
  Report,
} from '@mui/icons-material'
import Logout from '../../logout/Logout'

export default function AdminLinks() {
  return (
    <div className={styles.container}>
      <div className={styles.userprofileWrapper}>
        <Imager
          src='/images/image4.jpg'
          objectFit='cover'
          layout='fill'
          alt='profile'
          className={styles.img}
        />
      </div>

      <ul className={styles.wrapper}>
        <div className={`${styles.dashboard} ${styles.linkWrapper}`}>
          <Linker href='/dashboard/admin' className={styles.link}>
            <Dashboard className={styles.icon}/>
            <h4>Dashboard</h4>
          </Linker>
        </div>

        <div className={`${styles.usersWrapper} ${styles.linkWrapper}`}>
          <Linker href='/dashboard/admin/users' className={styles.link}>
            <VerifiedUser className={styles.icon}  />
            <h4>Users</h4>
          </Linker>
        </div>

        <div className={`${styles.userEnrolsWrapper}  ${styles.linkWrapper}`}>
          <Linker href='/dashboard/admin/users' className={styles.link}>
            <VerifiedUser className={styles.icon} />
            <h4>User Enrolls</h4>
          </Linker>
        </div>

        <div className={`${styles.courses}  ${styles.linkWrapper}`}>
          <Linker href='/dashboard/admin/courses' className={styles.link}>
            <VerifiedUser className={styles.icon} />
            <h4>Courses</h4>
          </Linker>
        </div>

        <div className={`${styles.transactionsWrapper} ${styles.linkWrapper}`}>
          <Linker
            href='/dashboard/admin/transactions'
            className={styles.link}
          >
            <Dashboard  className={styles.icon}/>
            Transactions
          </Linker>
        </div>

        <div className={` ${styles.reportsWrapper} ${styles.linkWrapper}`}>
          <Linker href='/dashboard/admin/reports' className={styles.link}>
            <Report className={styles.icon}/>
            Reports
          </Linker>
        </div>

        <div className={`${styles.accountSettings} ${styles.linkWrapper}`}>
          <Linker
            href='/dashboard/admin/accountsettings'
            className={styles.link}
          >
            <Dashboard className={styles.icon} />
            Account Settings
          </Linker>
        </div>

        <div className={`${styles.helpWrapper} ${styles.linkWrapper}`}>
          <Linker
            href='/dashboard/admin/helpcenter'
            className={styles.link}
          >
            <HelpCenter className={styles.icon} />
            help center
          </Linker>
        </div>

        <div className={`${styles.logout} ${styles.linkWrapper}`}>
          <Linker
            href='/dashboard/admin/helpcenter'
            className={styles.link}
          >
            <Logout />
          </Linker>
        </div>
      </ul>
    </div>
  )
}
