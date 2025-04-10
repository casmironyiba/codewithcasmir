import React from 'react'
import styles from './homecontent.module.scss'
import HomeLayout1 from '../homeLayout1/HomeLayout1'
import HomeLayout2 from '../homeLayout2/HomeLayout2'
import HomeLayout3 from '../homeLayout3/HomeLayout3'
import HomeLayout4 from '../homeLayout4/HomeLayout4'
import HomeLayout5 from '../homeLayout5/HomeLayout5'
import HomeLayout6 from '../homeLayout6/HomeLayout6'
import Testimonials from '../testimonials/Testimonials'
import HomeLayout7 from '../homeLayout7/HomeLayout7'
import PersonalSkills from '../personalSkills/PersonalSkills'

export default function HomeContent() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.layout1}>
          <HomeLayout1 />
        </div>

        <div className={styles.layout4}>
          <HomeLayout4 />
        </div>

        <div className={styles.layout7}>
          <HomeLayout7 />
        </div>

        <div className={styles.layout9}>
          <PersonalSkills />
        </div>

        <div className={styles.layout6}>
          <HomeLayout6 />
        </div>

        <div className={styles.layout2}>
          <HomeLayout2 />
        </div>

        <div className={styles.layout5}>
          <HomeLayout5 />
        </div>

        <div className={styles.layout3}>
          <HomeLayout3 />
        </div>

        <div className={styles.layout8}>
          <Testimonials />
        </div>
      </div>
    </div>
  )
}
