import React, { useState, useEffect, FC } from 'react'
import styles from './accountSettings.module.scss'
import ProfileImage from '@/ui/components/profileImage/ProfileImage'
import UserCredentials from '@/ui/components/userCredentials/UserCredentials'
import { auth } from '@/firebaseConfig'
import { onAuthStateChanged, updateProfile, User } from 'firebase/auth'
import { useRouter } from 'next/navigation';
import IUser from '@/ui/interface/IUser'

interface Props {
  user: IUser;
  userImg: any;
  setUserImg: any;
}
const AccountSettingsContent: FC<Props> = ({ user, userImg, setUserImg }) => {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <h3>Edit Profile</h3>
      </div>
      <div className={styles.section2}>
        <ProfileImage userImg={userImg} setUserImg={setUserImg} />
      </div>
      <div className={styles.section3}>
        <UserCredentials user={user} />
      </div>
    </div>
  )
}

export default AccountSettingsContent;
