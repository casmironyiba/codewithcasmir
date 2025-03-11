
'use client'
import { useAuth } from '@/context/AuthContext' 
import { sendEmailVerification } from 'firebase/auth'
import { useState } from 'react'
import styles from './sendEmailVerification.module.scss'

const SendEmailVerification = () => {
  const { user } = useAuth() 
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleResendVerification = async () => {
    if (!user) return

    try {
      setLoading(true)
      await sendEmailVerification(user)
      setMessage('Verification email sent! Check your inbox.')
    } catch (error: any) {
      console.error('Error sending verification email:', error)
      setMessage(error.message || 'Failed to send verification email.')
    } finally {
      setLoading(false)
    }
  }

  if (!user || user.emailVerified) return null

  return (
    <div className={styles.container}>
      <p className={styles.p}>Your email is not verified.</p>
      <button
        onClick={handleResendVerification}
        disabled={loading}
        className={styles.button}
      >
        {loading ? 'Sending...' : 'Resend Verification Email'}
      </button>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  )
}

export default SendEmailVerification
