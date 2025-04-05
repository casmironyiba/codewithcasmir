'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthButton from '@/ui/components/AuthButton'
import styles from './signinByEmailForm.module.scss'
import { auth } from '@/lib/helpers/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { setCookie } from 'cookies-next'
import IUser from '@/types/IUser'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ForgotpasswordLink from '../../ForgotpasswordLink'
import DontHaveAnAccount from '../../DontHaveAnAccount'
import resetFormFields from '@/lib/utilities/resetFormInput'
import GoogleLogin from '../../GoogleLogin'
import { Label } from '@/ui/components/Label'

interface SigninPageProps {
  users: IUser[] | null
}

export default function SigninByEmailForm({ users }: SigninPageProps) {
  const [email, setEmail] = useState('')
  // const [userBuffer, setUserBuffer] = useState<IUser | null>(null);
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [error, setError] = useState('')
  // const [users, setUsers] = useState<IUser[]>([]);
  const router = useRouter()

  const signinErrRef = useRef<any>(null)
  // const emailRef = useRef<any>(null)
  // const passwordRef = useRef<any>(null)
  const passwordEyeWrapperRef = useRef<any>(null)

  const fields = {
    setEmail,
    setPassword,
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('') // Reset error state on submit attempt

    try {
      const user = users?.find((u) => u.email === email)
      console.log(`user ---> ${user}`)

      if (!user) {
        setError('Invalid User')
        return
      }

      if (!user.role) {
        setError('User role is undefined or invalid.')
        console.error('User role is missing:', user)
        return
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      )
      console.log('Signed in as:', userCredential.user.email)

      setCookie('role', user.role, { path: '/' })

      // Redirect based on role
      switch (user.role) {
        case 'admin':
          router.push('/admin/dashboard')
          setError('')
          resetFormFields(fields)
          break
        case 'instructor':
          router.push('/instructor/dashboard')
          setError('')
          resetFormFields(fields)
          break
        case 'student':
          router.push('/student/dashboard')
          resetFormFields(fields)
          setError('')
          break
        default:
          setError('Role not recognized')
      }
    } catch (error) {
      setError('Invalid email or password')
      console.error('Error signing in:', error)
    }
  }

  useEffect(() => {
    const togglePasswordVisibility = () => {
      setPasswordVisible((prev) => !prev)
    }
    passwordEyeWrapperRef?.current?.addEventListener(
      'click',
      togglePasswordVisibility,
    )

    return () => {
      passwordEyeWrapperRef?.current?.removeEventListener(
        'click',
        togglePasswordVisibility,
      )
    }
  }, [passwordVisible, users])
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <div className={styles.signinText}>
          <h1 className={styles.header}>Sign in to techLinage</h1>
          <p className={styles.subHeader}>
            Welcome back! please sign in to continue
          </p>
        </div>
        <div className={styles.googleLoginWrapper}>
          <GoogleLogin />
        </div>
        <div className={styles.separator}>
          <span className={styles.before}></span>
          or
          <span className={styles.after}></span>
        </div>
      </div>

      <form
        className={`${styles.form} ${styles.section2}`}
        onSubmit={handleSubmit}
      >
        <div className={styles.errorWrapper} ref={signinErrRef}>
          {error && <div className={styles.error}>{error}</div>}
        </div>

        <div className={styles.inputContainer}>
          <div className={`${styles.emailInputWrapper}  ${styles.inputWrapper}`}>
            <Label htmlFor='email' className={styles.emailLabel}>
              {' '}
              Email address
            </Label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              required
              className={styles.input}
              onFocus={() => setError('')} // Clear error on focus
            />
          </div>

          <div className={`${styles.passwordInputWrapper} ${styles.inputWrapper}`}>
            <Label htmlFor='password' className={styles.passwordLabel}>
              {' '}
              Password
            </Label>
            <div className={styles.eyeContainer}>
              <div
                ref={passwordEyeWrapperRef}
                className={styles.passwordEyeWrapper}
              >
                <VisibilityOffIcon className={styles.passwordEyeClose} />
                <VisibilityIcon className={styles.passwordEyeOpen} />
              </div>

              <input
                type={passwordVisible ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                required
                onFocus={() => setError('')} // Clear error on focus
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.authButtonWrapper}>
            <AuthButton signin />
          </div>
        </div>
      </form>

      <div className={styles.section3}>
        <div className={styles.forgotpasswordWrapper}>
          <ForgotpasswordLink />
        </div>

        <div className={styles.accountWrapper}>
          <DontHaveAnAccount />
        </div>
      </div>
    </div>
  )
}
