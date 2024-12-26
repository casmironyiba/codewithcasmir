'use client'
import Logo from '@/ui/components/Logo'
import NavBar from '@/ui/components/navbar/NavBar'
import React, { FC, useState } from 'react'
import Hamburger from '@/ui/components/hamburger/Hamburger'
import styles from './header.module.scss'
import { Roboto } from 'next/font/google'

interface Props {
  className?: any
};


const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

const Header: FC<Props> = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false)
  return (
    <header className={`${styles.container} ${roboto.className}`}>
      <div className={styles.wrapper}>
        <Logo />
        <NavBar isNavBarOpen={isNavBarOpen} />
        <Hamburger
          isNavBarOpen={isNavBarOpen}
          setIsNavBarOpen={setIsNavBarOpen}
        />
      </div>
    </header>
  )
}

export default Header
