'use client'

import React, { useEffect, useState } from 'react'
import styles from './emailverify.module.scss'
import Link from 'next/link'
import { sendEmailVerification } from 'firebase/auth'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { CircleArrowRight } from 'lucide-react'
import Themes from '@/lib/utilities/themes'
import SigninLink from '@/ui/components/links/signinLink/SigninLink'

export default function EmailVerify() {
  const { user, isVerified, loading } = useAuth()
  const [message, setMessage] = useState<string>('')
  const [sending, setSending] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isVerified) {
      router.push('/auth/signin/email')
    }
  }, [isVerified, router])

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault() // Prevent page reload

    if (!user) {
      setMessage('No user logged in')
      return
    }

    if (isVerified) {
      router.push('/auth/signin/email')
      return
    }

    try {
      setSending(true) // Disable button

      await sendEmailVerification(user) // Send email
      setMessage('Verification email sent! Check your inbox.')
      console.log('Verification email sent!')

      setTimeout(() => {
        setMessage('')
      }, 5000) // Hide message after 5 sec
    } catch (error) {
      console.error('Error sending verification email:', error)
      setMessage('Failed to send verification email.')
    } finally {
      setSending(false) // Enable button again
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <p className={styles.text}>Email Verification</p>
        {message && <div className={styles.messageWrapper}>{message}</div>}
      </div>
      <div className={styles.auth}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <input
              type='email'
              placeholder={user?.email || 'Email address'}
              className={styles.inputWrapper}
              disabled // Prevent user from changing the email
            />
          </div>

          <button type='submit' className={styles.button} disabled={sending}>
            {sending ? 'Sending...' : 'Verify'}
            <CircleArrowRight size={15} color={Themes.$white} />
          </button>
        </form>
        <div className={styles.already}>
          Already a member?{' '}
          <span>
            <SigninLink />
          </span>
        </div>
      </div>
    </div>
  )
}

