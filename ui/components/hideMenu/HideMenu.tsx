import React from 'react'
import styles from './hideMenu.module.scss'
import MenuIcon from '@mui/icons-material/Menu';

export default function HideMenu() {
  return (
    <div className={styles.container}>
    <MenuIcon sx={{fontSize:'lg'}} />
    <h6>Menu</h6>
    </div>
  )
}
