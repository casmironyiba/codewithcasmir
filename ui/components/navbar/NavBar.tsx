import React, {FC, useEffect, useState } from 'react'
import styles from './navBar.module.scss';
import Subscribe from '../subscribeLink/Subscribe';
import Courses from '../coursesLink/Courses';
import LearningPath from '../learningLink/LearningPath';
import Forum from '../forumLink/Forum';
import Contact from '../contactsLink/Contact';
import MemberArea from '../memberLink/MemberArea';

interface NavBarProps {
  isNavBarOpen: boolean;
}
const NavBar:FC<NavBarProps> = ({isNavBarOpen}) => {
  // const [isNavBarOpen, setIsNavBarOpen] = useState(false)
useEffect(() =>{
  console.log('NavBar isNavBarOpen:', isNavBarOpen);

  },[isNavBarOpen])

  return (
    <div className={isNavBarOpen ? styles.navbarOpen : styles.container}>
      <div className={styles.wrapper}>
        <Subscribe />
        <Courses />
        <LearningPath />
        <Forum />
        <Contact />
        <MemberArea />
      </div>
    </div>
  )
};

export default NavBar;


