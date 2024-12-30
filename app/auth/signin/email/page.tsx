'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import DontHaveAnAccount from '@/ui/components/DontHaveAnAccount'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import AuthButton from '@/ui/components/authButton/AuthButton'
import styles from './signin.module.scss'
import ForgotpasswordLink from '@/ui/components/forgotPasswordLink/ForgotpasswordLink'
import { auth } from '@/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import AuthText from '@/ui/components/AuthText'
import IUser from '@/ui/interface/IUser'
import getUserByEmail from '@/helpers/getUserByEmail'
import getUsers from '@/helpers/getUsers'

export default function SigninPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [error, setError] = useState('')
  const [user, setUser] = useState<any>({})
  const [users, setUsers] = useState<IUser[]>([])

  const router = useRouter()

  const emailRef = useRef<any>(null)
  const passwordRef = useRef<any>(null)
  const passwordEyeWrapperRef = useRef<any>(null)
  const signinErrRef = useRef<any>(null)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const user = getUserByEmail(users,email)

      console.log(user)

      if (user?.email !== email) {
        setError('Invalid User')
        console.log('Invalid User')
        return
      } else if (user?.email === email && user?.role === 'admin') {
        // router.push('/admin/dashboard')
        console.log('admin credentails identified')
        return
      } else if (user?.email === undefined || null) {
        setError('Network error')
        console.log('Network error ')
        return
      }
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      )
      setUser(userCredential)
      console.log('successfully signed In', userCredential.user.email)
      console.log(user)
      setEmail('')
      setPassword('')
      router.push(`/admin/dashboard`)
      // ...
    } catch (error) {
      setError('Invalid email or password')
      console.error('Error signing in: ', error)
    }
  }

  useEffect(() => {
    const loadUsers = async () => {
      const fetchedData = await getUsers()
      setUsers(fetchedData)
      console.log(fetchedData)
    }
    const togglePasswordVisibility = () => {
      setPasswordVisible((prev) => !prev)
    }
    passwordEyeWrapperRef?.current?.addEventListener(
      'click',
      togglePasswordVisibility,
    )

    loadUsers()

    return () => {
      passwordEyeWrapperRef?.current?.removeEventListener(
        'click',
        togglePasswordVisibility,
      )
    }
  }, [passwordVisible])

// console.log(user)
console.log(users)
  return (
    <div className={styles.container}>
      <div className={styles.authTextWrapper}>
        <AuthText userRole={'User'} authType={'Sign In'} />
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.errorWrapper} ref={signinErrRef}>
          {error && <div className={styles.error}>{error}</div>}
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.emailInputWrapper}>
            <input
              className={styles.input}
              ref={emailRef}
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              required
            />
          </div>

          <div className={styles.passwordInputWrapper}>
            <div className={styles.eyeContainer}>
              <div
                ref={passwordEyeWrapperRef}
                className={styles.passwordEyeWrapper}
              >
                <VisibilityOffIcon className={styles.passwordEyeClose} />
                <VisibilityIcon className={styles.passwordEyeOpen} />
              </div>

              <input
                className={styles.input}
                ref={passwordRef}
                id='password'
                type={passwordVisible ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                required
              />
            </div>
          </div>

          <div className={styles.forgotpasswordWrapper}>
            <ForgotpasswordLink />
          </div>

          <div className={styles.authButtonWrapper}>
            <AuthButton signin />
          </div>

          <div className={styles.accountWrapper}>
            <DontHaveAnAccount />
          </div>
        </div>
      </form>
    </div>
  )
}
