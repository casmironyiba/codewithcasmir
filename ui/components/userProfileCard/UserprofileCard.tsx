"use client"
import React from 'react'
import styles from './userprofileCard.module.scss';
import ImageComponent from '../imager/Imager';

export default function UserprofileCard() {

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <ImageComponent
          src='/images/image4.jpg' 
          alt='profile image' 
          />
      </div>
    </div>
  )
}
