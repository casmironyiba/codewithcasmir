import React from 'react'
import styles from './personalSkills.module.scss'
import Imager from '../imager/Imager'

export default function PersonalSkills() {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Imager
          src='/images/image02.jpeg'
          layout='fill'
          objectFit='cover'
          alt={'skill image'}
        />
      </div>

      <div className={styles.textWrapper}>
        <div className={styles.layer1}>
          <strong>Finished a professional course ?</strong>
          <h3>
            Get resources and support to guide you through the job search
            process.{' '}
          </h3>
        </div>
        <div className={styles.layer2}>
          <div className={styles.showcase}>
            <h3>Showcase your skills</h3>
            <p>Present real-world projects to potential employers.</p>
          </div>

          <div className={styles.enhence}>
            <h3>Enhance your resume</h3>
            <p>Get support to build a standout resume and LinkedIn profile.</p>
          </div>

          <div className={styles.ace}>
            <h3>Ace your interview</h3>
            <p>
              Practice and improve your interview skills with virtual feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
