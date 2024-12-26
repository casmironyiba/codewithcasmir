'use client'
import React, { useEffect, useRef, useState } from 'react'
import { redirect, useRouter } from 'next/navigation'
import AuthButton from '@/ui/components/authButton/AuthButton'
import KeyDown from '@/ui/components/keyDown/keyDown'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import styles from './signup.module.scss'
import AlreadyHaveAnAccount from '@/ui/components/AlreadyHaveAnAccount'
import ResetFormData from '@/ui/components/resetFormData/ResetFormData'
import AuthText from '@/ui/components/AuthText'

export default function AdminSignup() {
  // const session = await getServerSession(authOptions)

  // if (session) {
  //   redirect('/dashboard');
  // };

  const router = useRouter()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [comfirmPassword, setComfirmPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [comfirmPasswordVisible, setComfirmPasswordVisible] = useState(false)
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = useState<{
    content: string
    type: 'success' | 'error'
  } | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    comfirmPassword: '',
  })
  const nameRef = useRef<any>(null)
  const usernameRef = useRef<any>(null)
  const emailRef = useRef<any>(null)
  const passwordRef = useRef<any>(null)
  const comfirmPasswordRef = useRef<any>(null)
  const buttonRef = useRef<any>(null)
  const passwordEyeWrapperRef = useRef<any>(null)
  const comfirmPasswordEyeWrapperRef = useRef<any>(null)
  const signupErrRef = useRef<any>(null)

  const nameKeyDown = KeyDown(usernameRef)
  const usernameKeyDown = KeyDown(emailRef)
  const emailKeyDown = KeyDown(passwordRef)
  const passwordKeyDown = KeyDown(comfirmPasswordRef)
  const comfirmPasswordKeyDown = KeyDown(buttonRef)

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    setMessage(null)

    const userInput = {
      name,
      username,
      email,
      password,
    }

    try {
      if (password !== comfirmPassword) {
        setMessage({ content: 'Password does not match', type: 'error' })
        console.log('password does not matched')
        return
      }

      const response = await fetch('/api/auth/signup/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ content: data.message, type: 'success' })
        console.log('Signup success', response)

        ResetFormData(
          setName,
          setUsername,
          setEmail,
          setPassword,
          setComfirmPassword,
        )

        return
      } else {
        setMessage({
          content: data.message || 'Invalid Credentilas',
          type: 'error',
        })
      }

      // Optionally, you can redirect the user or show other messages.
    } catch (error: any) {
      setMessage({ content: 'An unexpected Error occured.', type: 'error' })
      console.log('Signup failed', error.message)
    }
  }

  useEffect(() => {
    nameRef.current?.focus()
    const togglePasswordVisibility = () => {
      setPasswordVisible((prev) => !prev)
    }

    const toggleComfirmPasswordVisibility = () => {
      setComfirmPasswordVisible((prev) => !prev)
    }

    passwordEyeWrapperRef.current.addEventListener(
      'click',
      togglePasswordVisibility,
    )
    comfirmPasswordEyeWrapperRef?.current?.addEventListener(
      'click',
      toggleComfirmPasswordVisibility,
    )

    return () => {
      passwordEyeWrapperRef?.current?.removeEventListener(
        'click',
        togglePasswordVisibility,
      )

      comfirmPasswordEyeWrapperRef?.current?.removeEventListener(
        'click',
        toggleComfirmPasswordVisibility,
      )
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.authTextWrapper}>
        <AuthText userRole={'Admin'} authType={'Sign Up'} />
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.errorWrapper} ref={signupErrRef}>
          {message && (
            <div
              className={
                message.type === 'success' ? styles.success : styles.error
              }
            >
              {message.content}
            </div>
          )}
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={nameRef}
              onKeyDown={nameKeyDown}
              placeholder='Name'
              required
            />
          </div>

          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              ref={usernameRef}
              onKeyDown={usernameKeyDown}
              placeholder='Username'
              required
            />
          </div>

          <div className={styles.inputWrapper}>
            <input
              id='email'
              className={styles.input}
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailRef}
              onKeyDown={emailKeyDown}
              placeholder='Email'
              required
            />
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.eyeContainer}>
              <input
                id='password'
                className={styles.input}
                type={passwordVisible ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordRef}
                onKeyDown={passwordKeyDown}
                placeholder='Password'
                required
              />

              <div
                className={styles.passwordEyeWrapper}
                ref={passwordEyeWrapperRef}
              >
                <VisibilityOffIcon
                  sx={{ fontSize: 18 }}
                  className={styles.passwordEyeClose}
                />
                <VisibilityIcon
                  sx={{ fontSize: 18 }}
                  className={styles.passwordEyeOpen}
                />
              </div>
            </div>
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.eyeContainer}>
              <input
                id='comfirmPassword'
                className={styles.input}
                type={comfirmPasswordVisible ? 'text' : 'password'}
                value={comfirmPassword}
                onChange={(e) => setComfirmPassword(e.target.value)}
                ref={comfirmPasswordRef}
                onKeyDown={comfirmPasswordKeyDown}
                placeholder='Comfirm Password'
                required
              />

              <div
                className={styles.comfirmPasswordEyeWrapper}
                ref={comfirmPasswordEyeWrapperRef}
              >
                <VisibilityOffIcon
                  sx={{ fontSize: 18 }}
                  className={styles.comfirmPasswordEyeClose}
                />
                <VisibilityIcon
                  sx={{ fontSize: 18 }}
                  className={styles.comfirmPasswordEyeOpen}
                />
              </div>
            </div>
          </div>
          <div className={styles.signupAuthButtonWrapper}>
            <AuthButton signup />
          </div>

          <div className={styles.alreadyWrapper}>
            <AlreadyHaveAnAccount admin/>
          </div>
        </div>
      </form>
    </div>
  )
}
