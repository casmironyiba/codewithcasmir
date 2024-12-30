"use client"
import React, { useState, useEffect, useRef } from 'react'
import styles from './createNewUser.module.scss'
import Button from '@/ui/components/button/Button'
import isPasswordThesame from '@/helpers/isPasswordThesame'
import { useRouter } from "next/navigation";
import postData from '@/helpers/postData'
import KeyDown from '@/ui/components/keyDown/keyDown'
import resetFormFields from '@/helpers/resetFormInput'
import Linker from '@/ui/components/linker/Linker'
// import handleChange from '@/helpers/handleChange'

export default function Page() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPassword, setComfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState<any | HTMLElement>('');
  const [height, setHeight] = useState<number>(0);

  const messageRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const comfirmPasswordRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLSelectElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const nameKeydown = KeyDown(usernameRef);
  const usernameKeydown = KeyDown(emailRef);
  const emailKeydown = KeyDown(passwordRef);
  const passwordKeydown = KeyDown(comfirmPassword);
  const comfirmPasswordKeyoown = KeyDown(roleRef)
  const roleKeydown = KeyDown(buttonRef);


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response409 = <div className={styles.message}>User already exists, if you are ? <Linker href='/auth/signin/email'>Sign in</Linker> </div>

    const userInput = {
      name,
      username,
      email,
      password,
      role: 'user'
    };

    try {

      isPasswordThesame(password, comfirmPassword, setMessage);
      const res = await fetch('/api/auth/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userInput })
      });

      const result = await res.json();

      // console.log(result)
      if (res.status === 409) {
        setMessage(response409)
      };

      if (res.ok) {
        console.log("Signup success", res);
        setMessage('User created success')
        resetFormFields({ setName, setUsername, setEmail, setPassword, setComfirmPassword, setRole, })

        return;
      };

    } catch (error: any) {
      console.log(`An error occurred ${error}`);
    }
  };

  useEffect(() => {
    nameRef.current?.focus();
    if (messageRef.current) {
      setHeight(messageRef.current.getBoundingClientRect().height)

    }

  }, [])

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.textWrapper}>
          <h2>Add User</h2>
          <div className={styles.messageWrapper} ref={messageRef}>{message}</div>
        </div>

        <div className={styles.inputsContainer}>
          <div className={`${styles.name} ${styles.inputWrapper || ''}`}>
            <input
              type="text"
              value={name}
              onKeyDown={nameKeydown}
              onChange={(e) => setName(e.target.value)}
              ref={nameRef}
              placeholder='Name'
              required
            />
          </div>
          <div className={`${styles.username} ${styles.inputWrapper || ''}`}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Username'
              onKeyDown={usernameKeydown}
              ref={usernameRef}
              required
            />
          </div>
          <div className={`${styles.email} ${styles.inputWrapper || ''}`}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={emailKeydown}
              placeholder='Email'
              ref={emailRef}
              required
            />
          </div>
          <div className={` ${styles.password} ${styles.inputWrapper || ''}`}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={passwordKeydown}
              placeholder='Password'
              ref={passwordRef}
              required
            />
          </div>
          <div className={`${styles.comfirmPassword} ${styles.inputWrapper || ''}`}>
            <input
              type="password"
              value={comfirmPassword}
              onChange={(e) => setComfirmPassword(e.target.value)}
              placeholder='Comfirm Password'
              onKeyDown={comfirmPasswordKeyoown}
              ref={comfirmPasswordRef}
              required
            />
          </div>
          <div
            className={`${styles.role} ${styles.inputWrapper || ''}`}>
            <select
              required
              value={role}
              onKeyDown={roleKeydown}
              onChange={(e) => setRole(e.target.value)}
              ref={roleRef}
            >
              <option value="" disabled>Role</option>
              <option value='admin'>Admin</option>
              <option value='user' >User</option>
            </select>
          </div>

          <div className={styles.buttonWrapper}>
            <Button label='submit' type='submit' />
          </div>
        </div>
      </form>

    </div>
  )
}
