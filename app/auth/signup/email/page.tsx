'use client'
import React, { useEffect, useRef, useState } from 'react'
import AuthButton from '@/ui/components/authButton/AuthButton'
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

export default function EmailSignup() {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState<string>('')
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
    event.preventDefault();
    setMessage(null);

    const userInput = {
      name,
      username,
      email,
      password,
    };

    try {
      if (password !== comfirmPassword) {
        setMessage({ content: 'Password does not match', type: 'error' });
        console.log('Password does not match');
        return;
      }

      // Call the server action directly
      'use server'
      const response = await signupAction(userInput);
      console.log(response)

      if (response.success) {
        setMessage({ content: response.message, type: 'success' });
        console.log('Signup successful', response);

        const fields = {
          setName,
          setUsername,
          setEmail,
          setPassword,
          setComfirmPassword
        }
        // Reset form data
        resetFormFields(fields);
      } else {
        setMessage({
          content: response.message || 'Invalid Credentials',
          type: 'error',
        });
        console.log('Signup failed:', response.message);
      }
    } catch (error) {
      setMessage({ content: 'An unexpected error occurred.', type: 'error' });
      console.error('Signup failed:', error);
    }
  };

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
      <div className={styles.authTextWrapper}>
        <AuthText userRole={'User'} authType={'Sign Up'} />
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
            <AlreadyHaveAnAccount />
          </div>
        </div>
      </form>
    </div>
  )
}
