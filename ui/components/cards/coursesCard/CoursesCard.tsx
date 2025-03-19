import React from 'react'
import styles from './coursesCard.module.scss'
import Image from 'next/image'
import ICourse from '@/types/ICourse'

interface UserProps {
  course: ICourse
}

const CoursesCard: React.FC<UserProps> = ({ course }) => {
  // <VerifiedUser sx={{ fontSize: '2rem' }} />
  return (
    <div className={styles.container}>
      <div className={styles.userWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src='/images/image4.jpg'
            width={100}
            height={100}
            alt='user image'
          />
        </div>

        <div className={styles.credentialsWrapper}>
          <div className={`${styles.inputWrapper} ${styles.name}`}>
            {course?.title}
          </div>

          <div className={`${styles.inputWrapper} ${styles.username}`}>
            {course?.category}
          </div>

          <div className={`${styles.inputWrapper} ${styles.email}`}>
            {course?.status}
          </div>

          <div className={`${styles.inputWrapper} ${styles.phone}`}>
            {course?.noOfStudentEnrolled}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesCard
