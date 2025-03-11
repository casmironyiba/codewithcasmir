import Linker from "@/ui/components/common/Linker"
import styles from './studentPlainLinks.module.scss'

export default function UserPlainLinks() {
  return (

      <ul className={styles.menu}>
        <li>
          <Linker href='/auth/dashboard/user'>Dashboard</Linker>
        </li>

        <li>
          <Linker href='/auth/dashboard/user/mycourses'>My Courses</Linker>
        </li>

        <li>
          <Linker href='/auth/dashboard/user/assignments'>Assignments</Linker>
        </li>

        <li>
          <Linker href='/auth/dashboard/user/grades'>Grades</Linker>
        </li>

        <li>
          <Linker href='/auth/dashboard/user/certificates'>Certificates</Linker>
        </li>

        <li>
          <Linker href='/auth/dashboard/user/learningplan'>Learning Plan</Linker>
        </li>

        <li>
          <Linker href='/auth/dashboard/user/activityfeeds'>Activity Feeds</Linker>
        </li>

        <li>
          <Linker href='/auth/dashboard/user/accountsettings'>Account Settings</Linker>
        </li>

        <li>
          <Linker href='/auth/dashboard/user/helpcenter'>Help Center</Linker>
        </li>

        <li>
          <Linker href='/auth/dashboard/user/explore'>Explore</Linker>
        </li>
        <li>
          <Linker href='/logout'>Logout</Linker>
        </li>
      </ul>
      )
  }
