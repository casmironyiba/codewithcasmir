'use client';
import React from 'react'
import styles from './footer.module.scss';
import SocialProfiles from '@/ui/components/socialProfiles/SocialProfiles';
import Policy from '@/ui/components/policy/Policy';
import YearInfo from '@/ui/components/yearInfo/YearInfo';
import { Roboto } from 'next/font/google';


const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

export default function Footer() {
  return (
    <footer className={` ${styles.container} ${roboto.className}`}>
      <YearInfo />
      <SocialProfiles />
      <Policy />
    </footer>
  )
}
