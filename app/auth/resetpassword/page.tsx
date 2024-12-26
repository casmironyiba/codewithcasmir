'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import styles from './resetpassword.module.scss'
import SigninLink from '@/ui/components/links/signinLink/SigninLink'

export default function ResetPassword() {
  const [password, setPassword] = useState('')
  const [comfirmPassword, setComfirmPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [comfirmPasswordVisible, setComfirmPasswordVisible] = useState(false)
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)

  const passwordRef = useRef<any>(null)
  const comfirmPasswordRef = useRef<any>(null)
  const passwordEyeWrapperRef = useRef<any>(null)
  const comfirmpasswordEyeWrapperRef = useRef<any>(null)
  const buttonRef = useRef<any>(null)
  const signinErrRef = useRef<any>(null)

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const response = await axios.post('/api/resetpassword', {
        password,
        comfirmPassword,
      })
      console.log('Password updated successfully', response.data)
      toast.success('Login success')
      router.push('/auth/signin/email')
    } catch (error: any) {
      console.log('Signup failed', error.message)
      toast.error(error.message)

      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const togglePasswordVisibility = () => {
      setPasswordVisible((prev) => !prev)
    };

    const toggleComfirmPasswordVisibility = () => {
      setComfirmPasswordVisible((prev) => !prev)
    }
    passwordEyeWrapperRef?.current?.addEventListener(
      'click',
      togglePasswordVisibility,
    );

    comfirmpasswordEyeWrapperRef?.current?.addEventListener(
      'click',
      toggleComfirmPasswordVisibility,
    )
    return () => {
      passwordEyeWrapperRef?.current?.removeEventListener(
        'click',
        togglePasswordVisibility,
      )
    }
  }, [passwordVisible])

  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h1 className={styles.text}>Reset Password</h1>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.error} ref={signinErrRef}>
          No Err
        </div>
        <div className={styles.inputContainer}>
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
                ref={comfirmPasswordRef}
                id='password'
                type={passwordVisible ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='Password'
              />
            </div>
          </div>

          <div className={styles.comfirmPasswordInputWrapper}>
            <div className={styles.eyeContainer}>
              <div
                ref={comfirmpasswordEyeWrapperRef}
                className={styles.comfirmPasswordEyeWrapper}
              >
                <VisibilityOffIcon className={styles.passwordEyeClose} />
                <VisibilityIcon className={styles.passwordEyeOpen} />
              </div>

              <input
                className={styles.input}
                ref={comfirmPasswordRef}
                id='password'
                type={comfirmPasswordVisible ? 'text' : 'password'}
                value={comfirmPassword}
                onChange={(e) => setComfirmPassword(e.target.value)}
                required
                placeholder='Comfirm Password'
              />
            </div>
          </div>
          <div className={styles.authButtonWrapper}>
            <button className={styles.resetpasswordButton}>Reset</button>
          </div>
          <div className={styles.signinWrapper}>
            <SigninLink />
          </div>
        </div>
      </form>
    </div>
  )
}
