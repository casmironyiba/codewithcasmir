
import React, { FC } from 'react'
import styles from './authButton.module.scss';

interface Prop {
  signup?: any;
  signin?: any;
  adminSignin?: any;
  adminSignup?: any;
  forgotpassword?: any;
  ref?: any
};

const AuthButton: FC<Prop> = (props: any) => {
  if (props.signup) {
    return (
      <>
        <button type='submit' className={styles.authButton}> Sign up</button>
      </>

    )
  };

  if (props.signin) {
    return (
      <>
        <button  type='submit' className={styles.authButton}> Sign In</button>
      </>

    )
  };

  if (props.adminSignin) {
    return (
      <>
        <button type='submit' className={styles.authButton}> Admin SignIn</button>
      </>

    )
  };

  if (props.adminSignup) {
    return (
      <>
        <button type='submit' className={styles.authButton}> Admin Sign up</button>
      </>

    )
  }
  if (props.forgotPassword) {
    return (
      <>
        <button  type='submit' className={styles.authButton}> Send </button>
      </>

    )
  }

  if (props.resetPassword) {
    return (
      <>
        <button type='submit' className={styles.authButton}> Reset Password</button>
      </>

    )
  }
  else {
    return (
      <>
        <button type='submit' className={styles.authButton}>Sign Up </button>
      </>
    )
  }
};

export default AuthButton;
