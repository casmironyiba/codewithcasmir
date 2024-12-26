import React,{useEffect,useState} from 'react'
import styles from './profileImage.module.scss'
import { ImageSharp } from '@mui/icons-material';
import { auth } from '@/firebaseConfig';
import { onAuthStateChanged, updateProfile, User } from 'firebase/auth';

export default function ProfileImage({userImg,setUserImg}:any) {

    console.log(userImg)
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
      <input type="file" onChange={(e)=>setUserImg(e.target.files[0])} />
      </div>
      <ImageSharp className={styles.imageIcon} />
    </div>
  )
}
