
import React from 'react'
import styles from './landing.module.scss'
import HeroSection from '@/ui/components/HeroSection'
import HomeLayout2 from '@/ui/components/homeLayout2/HomeLayout2'
import HomeLayout3 from '@/ui/components/homeLayout3/HomeLayout3'
import HomeLayout4 from '@/ui/components/homeLayout4/HomeLayout4'
import HomeLayout5 from '@/ui/components/homeLayout5/HomeLayout5'
import HomeLayout6 from '@/ui/components/homeLayout6/HomeLayout6'
import Testimonials from '@/ui/components/testimonials/Testimonials'
import HomeLayout7 from '@/ui/components/homeLayout7/HomeLayout7'
import PersonalSkills from '@/ui/components/personalSkills/PersonalSkills'

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.layout1}>
          <HeroSection />
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
