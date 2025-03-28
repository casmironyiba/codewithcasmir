import React, { FC, useEffect, useState } from 'react'
import styles from './navBar.module.scss'
import Link from 'next/link'
import { Bell, BookOpen } from 'lucide-react'
import Logo, { LogoIcon } from '../Logo'

interface NavBarProps {
  isNavBarOpen: boolean
  setIsNavBarOpen: any
}

const NavBar: FC<NavBarProps> = ({ isNavBarOpen }) => {
  // const [isNavBarOpen, setIsNavBarOpen] = useState(false)
  useEffect(() => {
    console.log('NavBar isNavBarOpen:', isNavBarOpen)
  }, [isNavBarOpen])

  return (
    <nav className={isNavBarOpen ? styles.navbarOpen : styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.layout1}>
          <div className={styles.logoWrapper}>
            <Link href='/' className={styles.logoLink} scroll={false}>
              <LogoIcon />
              <Logo />
            </Link>
          </div>
          <div className={styles.searchInputWrapper}>
            <BookOpen className={styles.searchIcon} size={18} />
            <Link
              href='/search'
              className={styles.searchinputLink}
              scroll={false}
            >
              <span className={styles.textbigScreen}>Search Courses</span>
              <span className={styles.textMobile}>Search</span>
            </Link>
          </div>
        </div>

        <div className={styles.layout2}>
          <div className={styles.actions}>
            <button className={styles.notificationButton}>
              <span className={styles.notificationIndicator}></span>
              <div className={styles.bellWrapper}>
                <Bell className={styles.notificationIcon} size={19} />
              </div>
            </button>

            <div className={styles.authWrapper}>
              <Link
                href='/signin'
                className={styles.authButtonLogin}
                scroll={false}
              >
                Sign in
              </Link>
              <Link
                href='/signup'
                className={styles.authButtonSignup}
                scroll={false}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
