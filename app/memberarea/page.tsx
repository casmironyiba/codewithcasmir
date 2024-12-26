import React from 'react'
import styles from './memberarea.module.scss'
import SiteInfo from '@/ui/components/siteInfo/SiteInfo'
import Link from 'next/link'
import SignupLink from '@/ui/components/links/signupLink/SignupLink'
import SigninLink from '@/ui/components/links/signinLink/SigninLink'
import { ArrowRightAlt } from '@mui/icons-material'

export default function MemberArea() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className='text'>
          {`${SiteInfo.name}, simplifies your coding journey and teaches you to have a clear understanding on how programming languages works under the hood. `}
        </h2>
        <div className={styles.auth}>
          <div className={styles.signupWrapper}>
            <h4>
              kindly Sign up and subscribe if you a new user to have an access
              to unlimited courses.
            </h4>
            <div className={styles.linkWrapper}>
              <ArrowRightAlt />
              <SignupLink className={styles.signupLink}>Sign up</SignupLink>
            </div>
          </div>

          <div className={styles.signinWrapper}>
            <h4>If your are alreday a member </h4>
            <div className={styles.linkWrapper}>
              <ArrowRightAlt />
              <SigninLink className={styles.signinLink}>
                Sign in
              </SigninLink>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
