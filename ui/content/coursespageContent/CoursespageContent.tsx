import React, { FC } from 'react'
import styles from './coursespageContent.module.scss';
import UserCard from '@/ui/components/userCard/UserCard';
import CoursesCard from '@/ui/components/coursesCard/CoursesCard'

interface Props {
  user: any;
}
const CoursespageContent: FC<Props> = ({ user }) => {
  return (
    <div className={styles.container}>
      <CoursesCard user={user} />
    </div>
  )
};


export default CoursespageContent; 


