import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import React, { useEffect, useRef,FC } from 'react'
import styles from './hamburger.module.scss';

interface HamburgerProps {
  isNavBarOpen: boolean;
  setIsNavBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hamburger:FC<HamburgerProps> = ({ isNavBarOpen, setIsNavBarOpen }) => {
  const menuRef = useRef<any>(null);


  useEffect(() => {
    const handleMenuClick = () => {
      setIsNavBarOpen((prev) => !prev);
console.log('isNavBarOpen after click:', isNavBarOpen);
    };

    menuRef.current?.addEventListener('click', handleMenuClick);

    return () => {
      menuRef.current?.removeEventListener('click', handleMenuClick);
    };

  }, [setIsNavBarOpen,isNavBarOpen]);


      // console.log('isNavBarOpen:', isNavBarOpen);

const containerClass = isNavBarOpen ? styles.hamburgerActive : styles.hamburger;

  return (
      <div 
        ref={menuRef}
        // className={styles.hamburger}
className={containerClass}
      >
        <MenuIcon
          sx={{color:'white',fontSize:35}} 
          id='menuIcon'
          className={styles.menuIcon}
          // className={styles.hamburger}
          />
        <MenuOpenIcon
          sx={{color:'white',fontSize:40}}
          fontSize='large'
          id='menuOpenIcon'
          className={styles.menuOpenIcon}
          />
    </div>
  )
};

export default Hamburger;


