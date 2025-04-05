'use client'
import React, { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import SiginLink from '@/ui/components/links/signinLink/SigninLink'
import styles from './forgotpasswordForm.module.scss'
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/helpers/firebaseConfig';
import ResetFormData from '@/ui/components/resetFormData/ResetFormData'
import AuthButton from '../../AuthButton'

export default function SigninPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const emailRef = useRef<any>(null)
  const buttonRef = useRef<any>(null)
  const signinErrRef = useRef<any>(null)

  const handleForgotPassword = async (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setMessage('')
    try {
      await sendPasswordResetEmail(auth, email)
      setMessage('Password reset email sent. Please check your inbox.')
      setEmail('');
    } catch (error: any) {
      setError(error.message || 'Failed to send password reset email.')
      console.error(error)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h1 className={styles.text}>Forgot Password</h1>
      </div>
      <form className={styles.form} onSubmit={handleForgotPassword}>
        <div className={styles.error} ref={signinErrRef}>
          No Err
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              ref={emailRef}
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='Email'
            />
          </div>

          <div className={styles.authButtonWrapper}>
            <AuthButton forgotpassword  />
          </div>
          <div className={styles.signinWrapper}>
            <SiginLink />
          </div>
        </div>
      </form>
      {message && <p>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}
