'use client'
import { DashboardOutlined } from "@mui/icons-material"
import Linker from "../linker/Linker"
import styles from './adminPlainLinks.module.scss'
import LogoutButton from '../LogoutButton'
export default function AdminPlainLinks() {
  return (

    <ul className={styles.menu}>
      <li className={styles.dashboardIcon}>
        <Linker href='/dashboard/admin'><DashboardOutlined sx={{ color: 'white' }} /> </Linker>
      </li>

      <li>
        <Linker href='/dashboard/admin/users'>Users</Linker>
      </li>

      <li>
        <Linker href='/dashboard/admin/userenrolls'>User Enrolls</Linker>
      </li>

      <li>
        <Linker href='/dashboard/admin/transaction'>Transactions</Linker>
      </li>

      <li>
        <Linker href='/dashboard/admin/courses'>Courses</Linker>
      </li>

      <li>
        <Linker href='/dashboard/admin/addmaterials'>Add Materials</Linker>
      </li>

      <li>
        <Linker href='/dashboard/admin/reports'>Reports</Linker>
      </li>

      <li>
        <Linker href='/dashboard/admin/accountsettings'>Account Settings</Linker>
      </li>

      <li>
        <Linker href='/dashboard/admin/helpcenter'>Help Center</Linker>
      </li>

      <li>
        <Linker href='/dashboard/admin/explore'>Explore</Linker>
      </li>
      <li>
        <LogoutButton />
      </li>
    </ul>
  )
}
