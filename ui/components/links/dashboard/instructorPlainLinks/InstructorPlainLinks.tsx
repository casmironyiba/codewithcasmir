import Linker from '@/ui/components/common/Linker'
import styles from './instructorPlainLinks.module.scss'
import LogoutButton from '@/ui/components/LogoutButton'

export default function InstructorPlainLinks() {
  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        <li>
          <Linker href='/instructor/dashboard'>Dashboard</Linker>
        </li>

        <li>
          <Linker href='/instructor/mycourses'>My Courses</Linker>
        </li>

        <li>
          <Linker href='/instructor/accountsettings'>Account Settings</Linker>
        </li>

        <li>
          <Linker href='/instructor/helpcenter'>Help Center</Linker>
        </li>

        <div className={styles.logoutWrapper}>
          <LogoutButton />
        </div>
      </ul>
    </div>
  )
}
