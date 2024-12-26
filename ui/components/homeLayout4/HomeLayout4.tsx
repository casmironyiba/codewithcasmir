import React from 'react'
import HomeVideos from '../homeVideos/HomeVideos'
import styles from './homeLayout4.module.scss'

export default function homeLayout4() {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h4 className={styles.text1}>Hello,</h4>
        <h2 className={styles.text2}>I'm Casmir Ifeanyichukwu</h2>
        <p className={styles.text3}>
          Are you feeling stuck or overwhelmed in your coding journey? Don't
          worry, I've got your back! Together, we'll work to level up your
          skills, increase your earning potential, and build a brighter future.
        </p>
      </div>
      <div className={styles.videoWrapper}>
        <HomeVideos src='/videos/video1.mp4' type='video/mp4' />
      </div>
    </div>
  )
}
