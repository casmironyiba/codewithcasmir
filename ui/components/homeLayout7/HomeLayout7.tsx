import React from 'react'
import styles from './homeLayout7.module.scss'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import AdjustIcon from '@mui/icons-material/Adjust';
import AutofpsSelectIcon from '@mui/icons-material/AutofpsSelect';


export default function HomeLayout7() {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h2>Take the first step toward your new career</h2>
        <p>
          Get professional and advanced-level training and earn a credential
          recognized by leading companies.
        </p>
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.card1}>
          <div className={styles.layer1}>
            <div className={styles.iconWrapper}>
              <AccessTimeIcon className={styles.icon}/>
            </div>
            <h4>Prior exprience optional</h4>
            <p>Build job-ready skills, even if you're new to the fields.</p>
          </div>
          <div className={styles.layer2}>
            <h4>4,899,543</h4>
            <p>
              job opening across entry-level professional Certificate fields
            </p>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.layer1}>

            <div className={styles.iconWrapper}>
              <AdjustIcon className={styles.icon}/>
            </div>
            <h4>Earn a valuable credential</h4>
            <p>
              Apply your new skills to real-world projects using the latest
              industry tools and techniques.
            </p>
          </div>
          <div className={styles.layer2}>
            <h4>4.7 / 5</h4>
            <p>
              average rating given by 200,000+ global learners enrolled in an
              entry-level Professional Certificate²
            </p>
          </div>
        </div>
        <div className={styles.card3}>
          <div className={styles.layer1}>

            <div className={styles.iconWrapper}>
              <AutofpsSelectIcon className={styles.icon}/>
            </div>
            <h4>Learn at your own pace</h4>
            <p>
              Complete the training in less than 6 months while working a
              full-time job.
            </p>
          </div>

          <div className={styles.layer2}>
            <h4>Learn at your own pace</h4>
            <p>
              Complete the training in less than 6 months while working a
              full-time job.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
