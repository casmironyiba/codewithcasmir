import { useState, useEffect, FC } from 'react'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { storage, db } from '@/lib/helpers/firebaseConfig'
import { useAuth } from '@/context/AuthContext'
import styles from './profilePicture.module.scss'
import Image from 'next/image'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
// import { UserIcon } from '@/ui/components/common/UserIcon'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
// import IUser from '@/types/IUser'
import userIcon from '/public/icons/userIcon.png'

interface Props {
  user: any
  setUser: any
}

const ProfilePicture: FC<Props> = ({ user, setUser }) => {
  // const { user, setUser } = useAuth()
  const [profilePic, setProfilePic] = useState<any | null>(null)
  const [image, setImage] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)


  useEffect(() => {
    const fetchProfilePicture = async () => {
      if (!user) return

      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid))
        if (userDoc.exists()) {
          const data = userDoc.data()
          setProfilePic(data.profilePicture || userIcon) // Set from Firestore or default
        } else {
          setProfilePic(userIcon) // Default if no record
        }
      } catch (error) {
        console.error('Error fetching profile picture:', error)
        setProfilePic(userIcon) // Default in case of error
      }
    }

    fetchProfilePicture()
  }, [user])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImage(e.target.files[0])
      handleUpload(e.target.files[0]) // Automatically upload after selection
    }
  }

  const handleUpload = async (file: File) => {
    if (!file || !user) return

    setUploading(true)
    const storageRef = ref(storage, `users/${user.uid}/profile.jpg`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setUploadProgress(progress)
      },
      (error) => {
        console.error('Upload failed:', error)
        setUploading(false)
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)

          console.log('Download URL:', downloadURL);

          // Ensure Firestore document exists before updating
          const userRef = doc(db, 'users', user.uid)
          const userDoc = await getDoc(userRef)
          console.log('Updating Firestore for user:', user.uid)

          if (userDoc.exists()) {
            await updateDoc(userRef, { profilePicture: downloadURL })
            console.log('Profile picture updated in Firestore')
          } else {
            console.warn('User document does not exist in Firestore')
          }

          setProfilePic(downloadURL)
          setUser((prev:any) => (prev ? { ...prev, photoURL: downloadURL } : prev))

          setUploading(false)
          setImage(null)
        } catch (error) {
          console.error('Error updating profile picture in Firestore:', error)
          setUploading(false)
        }
      },
    )
  }

  return (
    <div className={styles.profileContainer}>
      {/* Hidden file input */}
      <input
        type='file'
        accept='image/*'
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id='fileInput'
      />

      {/* Clickable profile image with camera icon */}
      <label htmlFor='fileInput' className={styles.profileWrapper}>
        <Image
          src={profilePic || userIcon}
          alt='Profile'
          width={120}
          height={150}
          className={styles.profileImage}
        />
        <div className={styles.iconOverlay}>
          <CameraAltIcon fontSize='small' />
        </div>
      </label>

      {uploading && <p>Uploading... {uploadProgress.toFixed(0)}%</p>}
    </div>
  )
}

export default ProfilePicture
