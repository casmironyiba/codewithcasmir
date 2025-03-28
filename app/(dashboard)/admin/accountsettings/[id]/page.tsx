'use client';
import DashboardNavigationInterface from '@/ui/interface/DashboardNavigationInterface'
import AdminMobileMenu from '@/ui/components/dashboardMobileMenu/admin/AdminMobileMenu';
import React, { FC, useState, useEffect } from 'react'
import styles from "./accountSettings.module.scss";
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation';
import AccountSettingsContent from '@/ui/content/accountSettingsContent/user/AccountSettings';
import getUserById from '@/helpers/getUserById';
import IUser from '@/ui/interface/IUser';
import getUsers from '@/helpers/getUsers';
import ProfileImage from '@/ui/components/profileImage/ProfileImage'
import UserCredentials from '@/ui/components/userCredentials/UserCredentials'

const AccountSettings: FC<DashboardNavigationInterface> = ({ params }) => {

  // const { id } = params

  const id  = '9H7YZ2pihLTWfZe8g7HnZxvWZFv1'
  const [isMenuOpen, setIsMenuOpen] = useState<any>('');
  // const [users, setUsers] = useState<any[]>([]);
  const [users, setUsers] = useState<IUser[] | undefined>(undefined);
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [userImg, setUserImg] = useState<any>({});

  useEffect(() => {
    const loadUser = async () => {
      const fetchedUsers = await getUsers();
      const actualUser = getUserById(fetchedUsers, id)
      setUsers(fetchedUsers)
      setUser(actualUser)
      console.log(actualUser)
    }
    loadUser()
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.controlBar}>
        <div className={styles.dbNavigationWrapper}>
          <DashboardNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>

            <AdminMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </DashboardNavigation>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.section3}>
          <UserCredentials user={user} />
        </div>
      </div>
    </div>
  )
};

export default AccountSettings;
