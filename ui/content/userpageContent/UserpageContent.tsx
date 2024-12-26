import React, { FC } from 'react'
import styles from './userpageContent.module.scss';
import UserCard from '@/ui/components/userCard/UserCard';


interface Props {
  user: any;
}
const UserpageContent: FC<Props> = ({ user }) => {
  return (
    <div className={styles.container}>
      <UserCard user={user} />
    </div>
  )
};


export default UserpageContent; 


