import { useState, useEffect, FC } from 'react'
import styles from './UserCardSlider.module.scss'
import Imager from '../imager/Imager'
import Image from 'next/image'

type User = {
  id: number
  name: string
  comments: string
  profilePicture: string
}

type Props = {
  users: User[]
}

const UserCardSlider: FC<Props> = ({ users }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length)
    }, 9000) // Change user card every 5 seconds

    return () => clearInterval(interval)
  }, [users.length])

  return (
    <div className={styles.container}>
      {users.map((user, index) => (
        <div
          key={user.id}
          className={`${styles.userCard} ${index === currentIndex ? styles.active : ''}`}
        >
          <div className={styles.imageWrapper}>
            <Imager
              src={user.profilePicture}
              alt={`${user.name}'s profile`}
              className={styles.image}
              layout='fill'
              objectFit='contain'
            />
          </div>
          <h3 className={styles.name}>{user.name}</h3>
          <p className={styles.comments}>{user.comments}</p>
        </div>
      ))}
    </div>
  )
}

export default UserCardSlider
