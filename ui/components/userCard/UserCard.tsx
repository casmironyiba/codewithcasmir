
import React from 'react';
import { UserType } from '../userTypes/UserTypes';
import styles from './userCard.module.scss'
import Image from 'next/image'

interface UserProps {
  user: UserType;
}

const UserCard: React.FC<UserProps> = ({ user }) => {
  // <VerifiedUser sx={{ fontSize: '2rem' }} />
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h1 className={styles.text}>User Credentials</h1>
      </div>
      <div className={styles.userWrapper}>

        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image src='/images/image4.jpg' width={100} height={100} alt='user image' />
          </div>
        </div>

        <div className={styles.credentialsWrapper}>
          <div className={`${styles.inputWrapper} ${styles.name}`}>
           Name: {user?.name}
          </div>

          <div className={`${styles.inputWrapper} ${styles.username}`}>
            {user?.username}
          </div>

          <div className={`${styles.inputWrapper} ${styles.email}`}>
            {user?.email}
          </div>

          <div className={`${styles.inputWrapper} ${styles.phone}`}>
            {user?.phone}
          </div>

          <div className={`${styles.inputWrapper} ${styles.role}`}>
            {user?.role}
          </div>

          <div className={`${styles.inputWrapper} ${styles.contry}`}>
            {user?.country}
          </div>

          <div className={`${styles.inputWrapper} ${styles.role}`}>
            {user?.role}
          </div>

          <div className={`${styles.inputWrapper} ${styles.address}`}>
            {user?.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
