'use client'
import React, { FC, useEffect, useState } from 'react'
import styles from './userCredentials.module.scss'
import IUser from '@/types/IUser'
import Select from '@/ui/components/inputs/Select'
import formatTimestamp from '../FormatTimeStamps'
import CountrySelect from '../countrySelect/CountrySelect'
import countries from '../countries/countries'
import getCurrentUser from '@/lib/helpers/getCurrentUser'
import ProfilePicture from '../profilePicture/ProfilePicture'

interface Props {
  user: IUser | any
}

const UserCredentials: FC<Props> = ({ user }) => {
  const [dob, setDob] = useState<Date | any>(undefined)
  const [country, setCountry] = useState<string>('')
  const [currentUser, setCurrentUser] = useState(user)
  const [residentials, setResidentials] = useState<string>('')

  const options = [
    { value: 'admin', label: 'admin' },
    { value: 'instructor', label: 'instructor' },
    { value: 'student', label: 'student' },
  ]
  // console.log(user)

  useEffect(() => {
    // const currentUser = getCurrentUser()
    console.log(user.username)
    setCurrentUser(user)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <h3>Edit Profile</h3>
      </div>

      <form className={styles.form}>
        <div className={styles.layout1}>
          <ProfilePicture user={user} setUser={setCurrentUser} />
        </div>
        <div className={styles.layer2}>
          <div className={styles.nameWrapper}>
            <label htmlFor='name'>Name:</label>
            <input type='text' className={styles.name} value={user?.email} />
          </div>

          <div className={styles.usernameWrapper}>
            <label htmlFor='name'>Username:</label>
            <input
              type='text'
              className={styles.username}
              value={user?.username}
            />
          </div>
        </div>

        <div className={styles.layer3}>
          <div className={styles.emailWrapper}>
            <label htmlFor='name'>Email:</label>
            <input type='text' className={styles.email} value={user?.email} />
          </div>
        </div>
        <div className={styles.layer4}>
          <div className={styles.roleWrapper}>
            <label htmlFor='role'>Role:</label>
            <input className={styles.role} value={user?.role} />
          </div>
          <div className={styles.regDateWrapper}>
            <label htmlFor='regDate'>Registration Date:</label>
            <input
              type='text'
              className={styles.regDate}
              value={user?.metadata.creationTime}
            />
          </div>
        </div>
        <div className={styles.layer5}>
          <div className={styles.dobWrapper}>
            <label htmlFor='dob'>Date of birth:</label>
            <input
              type='date'
              className={styles.dob}
              onChange={(e) => setDob(e.target.value)}
              value={dob}
            />
          </div>
        </div>

        <div className={styles.layer6}>
          <div className={styles.countryWrapper}>
            <label htmlFor='country'>Country:</label>
            <CountrySelect
              className={styles.country}
              countries={countries}
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
          </div>
        </div>

        <div className={styles.layer8}>
          <button className={styles.button}>Update profile</button>
        </div>
      </form>
    </div>
  )
}

export default UserCredentials
