import React from 'react'
import styles from './emailverify.module.scss'
import SiteInfo from '@/ui/components/siteInfo/SiteInfo'
import Link from 'next/link'
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "@/firebaseConfig";  // Import the auth instance


export default async function MemberArea(email:string,password:string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Send verification email
    await sendEmailVerification(user);
    console.log("Verification email sent!");

    // Additional logic after email is sent (e.g., redirect or show a success message)
  } catch (error) {
    console.error("Error during sign up: ", error);
  }
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <p className={styles.text}>Email Verification</p>
      </div>
      <div className={styles.auth}>
        <form className={styles.form}>
          <div className={styles.inputWrapper}>
            <input
              type='email'
              placeholder='Email address'
              className={styles.inputWrapper}
            />
          </div>

            <button type='submit' className={styles.button}>Verify</button>
        </form>
        <div className={styles.already}>
          <p>Already a member <span><Link href={'/auth/signin/email'}>Sign In</Link> </span></p>
        </div>
      </div>
    </div>
  )
}
