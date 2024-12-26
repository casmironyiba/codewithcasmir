import React from 'react'
import HomeInfoText from '../homeinfoText/HomeInfoText'
import styles from './homeLayout1.module.scss'
import Enroll from '../enroll/Enroll'
import AnalogClock from '../analogClock/AnalogClock'

export default function HomeLayout1() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <HomeInfoText />
        <Enroll />
      </div>
      <div className={styles.clockWrapper}>
        <AnalogClock />
      </div>
    </div>
  )
}
