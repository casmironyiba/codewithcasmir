'use client'
import { DashboardOutlined } from '@mui/icons-material'
import Linker from '@/ui/components/common/Linker'
import styles from './adminPlainLinks.module.scss'
import LogoutButton from '@/ui/components/LogoutButton'

export default function AdminPlainLinks() {
  return (
    <ul className={styles.menu}>
      <li className={styles.dashboardIcon}>
        <Linker href='/admin/dashboard'>Dashboard</Linker>
      </li>

      <li>
        <Linker href='/admin/users'>Users</Linker>
      </li>

      <li>
        <Linker href='/admin/userenrolls'>User Enrolls</Linker>
      </li>

      <li>
        <Linker href='/admin/transaction'>Transactions</Linker>
      </li>

      <li>
        <Linker href='/admin/courses'>Courses</Linker>
      </li>

      <li>
        <Linker href='/admin/addmaterials'>Add Materials</Linker>
      </li>

      <li>
        <Linker href='/admin/reports'>Reports</Linker>
      </li>

      <li>
        <Linker href='/admin/accountsettings'>Account Settings</Linker>
      </li>

      <li>
        <Linker href='/admin/helpcenter'>Help Center</Linker>
      </li>

      <li className={styles.logoutButtonWrapper}>
        <LogoutButton background='#0000FF' color='white' />
      </li>
    </ul>
  )
}
