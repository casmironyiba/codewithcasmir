import React from 'react'
import styles from './studentLinks.module.scss'
import Linker from '@/ui/components/common/Linker'
import {
  Dashboard,
  HelpCenter,
  School,
  Assignment,
  Grade,
  CastForEducation,
  LocalActivity,
  Settings,
  Explore,
} from '@mui/icons-material'
import Logout from '@/ui/components/common/Logout'
// import UserprofileCard from '../../userProfileCard/UserprofileCard'
import Imager from '@/ui/components/common/Imager'

export default function UserLinks() {
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
          <Linker href='/dashboard/user' className={styles.link}>
            <Dashboard className={styles.icon} />
            <h4>Dashboard </h4>
          </Linker>
        </div>

        <div className={`${styles.mycourses} ${styles.linkWrapper}`}>
          <Linker href='/dashboard/user/mycourses' className={styles.link}>
            <School className={styles.icon} />
            <h4>My Courses</h4>
          </Linker>
        </div>

        <div className={`${styles.assignments} ${styles.linkWrapper}`}>
          <Linker href='/dashboard/user/assignments' className={styles.link}>
            <Assignment className={styles.icon} />
            <h4>Assignments</h4>
          </Linker>
        </div>

        <div className={`${styles.grades} ${styles.linkWrapper}`}>
          <Linker href='/dashboard/user/grades' className={styles.link}>
            <Grade className={styles.icon} />
            <h4>Grades</h4>
          </Linker>
        </div>

        <div className={`${styles.certificates} ${styles.linkWrapper}`}>
          <Linker href='/dashboard/user/certificates' className={styles.link}>
            <Assignment className={styles.icon} />
            <h4>Certificates</h4>
          </Linker>
        </div>

        <div className={`${styles.learningPlan} ${styles.linkWrapper}`}>
          <Linker href='/dashboard/user/learningplan' className={styles.link}>
            <CastForEducation className={styles.icon} />
            <h4>Learning Plan</h4>
          </Linker>
        </div>

        <div className={`${styles.activityFeed} ${styles.linkWrapper}`}>
          <Linker href='/dashboard/user/activityfeeds' className={styles.link}>
            <LocalActivity className={styles.icon} />
            <h4>Activity Feeds</h4>
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

        <div className={`${styles.explore} ${styles.linkWrapper}`}>
          <Linker href='/dashboard/user/explore' className={styles.link}>
            <Explore className={styles.icon} />
            <h4>Explore</h4>
          </Linker>
        </div>

        <div className={`${styles.logout} ${styles.linkWrapper}`}>
          <Logout />
        </div>
      </ul>
    </div>
  )
}
