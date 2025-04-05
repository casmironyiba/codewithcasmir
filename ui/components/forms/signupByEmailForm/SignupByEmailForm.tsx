'use client'
import React, { useEffect, useRef, useState } from 'react'
import AuthButton from '@/ui/components/AuthButton'
import KeyDown from '@/ui/components/keyDown/keyDown'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import styles from './email.module.scss'
import AlreadyHaveAnAccount from '@/ui/components/AlreadyHaveAnAccount'
import ResetFormData from '@/ui/components/resetFormData/ResetFormData'
import AuthText from '@/ui/components/AuthText'
import { signupAction } from '@/actions/signup'
import IUser from '@/types/IUser'
import resetFormFields from '@/lib/utilities/resetFormInput'
import GoogleLogin from '../../GoogleLogin'
import { Label } from '@/ui/components/Label'

export default function SignupByEmailForm() {
  const [name, setName] = useState<string | undefined>('')
  const [username, setUsername] = useState<string | undefined>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState('')
  const [comfirmPassword, setComfirmPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [comfirmPasswordVisible, setComfirmPasswordVisible] = useState(false)
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = useState<{
    content: string
    type: 'success' | 'error'
  } | null>(null)
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

  const handleSubmit = async (event: React.FormEvent) => {
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
        console.log('Password does not match')
        return
      }

      // Call the server action directly
      ; ('use server')
      const response = await signupAction(userInput)
      console.log(response)

      if (response.success) {
        setMessage({ content: response.message, type: 'success' })
        console.log('Signup successful', response)

        const fields = {
          setName,
          setUsername,
          setEmail,
          setPassword,
          setComfirmPassword,
        }
        // Reset form data
        resetFormFields(fields)
      } else {
        setMessage({
          content: response.message || 'Invalid Credentials',
          type: 'error',
        })
        console.log('Signup failed:', response.message)
      }
    } catch (error) {
      setMessage({ content: 'An unexpected error occurred.', type: 'error' })
      console.error('Signup failed:', error)
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

    console.log(name)
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
      <div className={styles.section1}>
        <div className={styles.signupText}>
          <h1 className={styles.header}>Create your account</h1>
          <p className={styles.subHeader}>
            Welcome! Please in the details to get started.
          </p>
        </div>

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

        <div className={styles.inputContainer}>
          <div className={`${styles.inputWrapper} ${styles.nameWrapper}`}>
            <Label htmlFor='name' className={styles.inputLabel}>
              Name
            </Label>
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

          <div className={`${styles.inputWrapper} ${styles.usernameWrapper}`}>
            <Label htmlFor='email' className={styles.inputLabel}>
              Username
            </Label>
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

          <div className={`${styles.inputWrapper} ${styles.emailWrapper}`}>
            <Label htmlFor='email' className={styles.inputLabel}>
              Email address
            </Label>
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

          <div className={`${styles.inputWrapper} ${styles.passwordWrapper}`}>
            <Label htmlFor='password' className={styles.inputLabel}>
              Password
            </Label>
            <div className={styles.eyeContainer}>
              <div
                className={styles.passwordEyeWrapper}
                ref={passwordEyeWrapperRef}
              >
                <VisibilityOffIcon
                  sx={{ fontSize: 15 }}
                  className={styles.passwordEyeClose}
                />
                <VisibilityIcon
                  sx={{ fontSize: 15 }}
                  className={styles.passwordEyeOpen}
                />
              </div>
              <input
                id='password'
                className={styles.input}
                type={passwordVisible ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordRef}
                onKeyDown={passwordKeyDown}
                placeholder='Enter your password'
                required
              />
            </div>
          </div>

          <div
            className={`${styles.inputWrapper} ${styles.comfirmpasswordWrapper}`}
          >
            <Label
              htmlFor='comfirmpassword'
              className={styles.inputLabel}
            >
              Comfirm password
            </Label>
            <div className={styles.eyeContainer}>
              <div
                className={styles.comfirmPasswordEyeWrapper}
                ref={comfirmPasswordEyeWrapperRef}
              >
                <VisibilityOffIcon
                  sx={{ fontSize: 15 }}
                  className={styles.comfirmPasswordEyeClose}
                />
                <VisibilityIcon
                  sx={{ fontSize: 15 }}
                  className={styles.comfirmPasswordEyeOpen}
                />
              </div>

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
            </div>
          </div>
          <div className={styles.signupAuthButtonWrapper}>
            <AuthButton signup />
          </div>
        </div>
      </form>

      <div className={styles.section3}>
        <div className={styles.alreadyWrapper}>
          <AlreadyHaveAnAccount />
        </div>
      </div>
    </div>
  )
}
