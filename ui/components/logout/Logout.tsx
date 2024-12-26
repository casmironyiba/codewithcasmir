'use client';

import React from 'react'
import { signOut } from 'next-auth/react';
import styles from './logout.module.scss';
import {LogoutSharp} from '@mui/icons-material';

export default function Logout() {
  return (
    <div className={styles.container}>
      <button onClick={() => signOut()}>
        <LogoutSharp sx={{fontSize:'large'}} />
        Logout 
      </button>
    </div>
  )
};
