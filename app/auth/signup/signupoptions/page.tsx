"use client";
import React, { useRef,useState } from "react";
import { useRouter } from "next/navigation";
import styles from '@/styles/app/auth/signup/signupOptions/signupOptions.module.scss';
import AlreadyHaveAbAccount from "@/components/auth/AlreadyHaveAnAccount";
import Link from "next/link";
import {Terminal} from "@mui/icons-material";
import TermsOfUseLink from "@/components/universal/TermsOfUseLink";
import PrivacyPolicyLink from "@/components/universal/PrivacyPolicy";
import CheckBox from "@/components/auth/CheckBox";



export default function SignupOptions() {

  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.section1}>

          <div className={styles.alreadyWrapper}>
            <AlreadyHaveAbAccount />
          </div>

          <div className={styles.signupOptionsText}>
            <h1> Sign Up</h1>
          </div>

          <div className={styles.signupWithEmail}>
            <Link href='/auth/signup/email'> Sign up with email</Link>
          </div>

        </div>

        <div className={styles.section2}>
          <div className={styles.checkInfo}>
            <div className={styles.checkbuttonWrapper}>
              <CheckBox />
            </div>
              
            <h6>
              Yes, techLinage can email me with promotions and news. (optional) 
            </h6>
          </div>

          <p>
            <span>
              By signin up, i agree to techLinage's  
              <TermsOfUseLink /> & <PrivacyPolicyLink /> 
               and the <TermsOfUseLink />  & <PrivacyPolicyLink />
              of the learning platform.
             </span>
          </p>
        </div>
      </div>
    </div>
  )
};


