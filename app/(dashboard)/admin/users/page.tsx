'use client'
import styles from './users.module.scss'
import React, { useState, useEffect, ChangeEvent } from 'react'
import getData from '@/lib/helpers/getData'
import IUser from '@/types/IUser'
import Linker from '@/ui/components/common/Linker'
import SearchBar from '@/ui/components/common/SearchBar'
import UserspageContent from '@/ui/components/content/userspageContent/UserpageContent'
// import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation'
// import MobileMenu from '@/ui/components/dashboardMobileMenu/MobileMenu'
import AdminMobileController from '@/ui/components/dashboardMobileController/admin/AdminMobileController'
import { Audio } from 'react-loader-spinner'

const UsersPage = () => {
  const [users, setUsers] = useState<IUser[] | any>(undefined)
  const [filteredUsers, setFilteredUsers] = useState<IUser[] | any>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  // const [isMenuOpen, setIsMenuOpen] = useState<any>('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getData('users')
        setUsers(fetchedUsers)
        setFilteredUsers(fetchedUsers)
        // console.log(users)
      } catch (error) {
        console.error('Error fetching users:', error)
        setError('Error fetching users')
      }
    }

    fetchUsers()
  }, [])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const query = e.target.value.toLowerCase()
    const filteredUsers = users?.filter(
      (user: IUser) =>
        user.name?.toLowerCase().includes(query) ||
        user.username?.toLowerCase().includes(query) ||
        user.email?.toLowerCase().includes(query),
    )
    setFilteredUsers(filteredUsers)
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className={styles.container}>
      <div className={styles.controlBar}>
        <AdminMobileController />

        <div className={styles.searchbarWrapper}>
          <SearchBar
            className={styles.searchBar}
            placeholder='Search users...'
            onChange={handleSearch}
          />
        </div>

        <div className={styles.adduserWrapper}>
          <Linker href='/admin/adduser'>Add User</Linker>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <UserspageContent
          filteredUsers={filteredUsers}
          setFilteredUsers={setFilteredUsers}
        />
      </div>
    </div>
  )
}
export default UsersPage
