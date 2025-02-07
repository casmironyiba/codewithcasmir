'use client'
import styles from './addCourses.module.scss'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation'
import MobileMenu from '@/ui/components/dashboardMobileMenu/user/MobileMenu'
import { ChangeEvent, FC, useState } from 'react'
import { storage } from '@/lib/helpers/firebaseConfig'
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  UploadTaskSnapshot,
} from 'firebase/storage'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/helpers/firebaseConfig' // Ensure Firestore is imported from your config
import Select from '@/ui/components/inputs/Select'

const AddCourse: FC = () => {
  const options = [
    { value: 'web', label: 'Web' },
    { value: 'app', label: 'App' },
    { value: 'graphics', label: 'Graphics' },
  ]
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [video, setVideo] = useState<File | null>(null)
  const [price, setPrice] = useState('')
  const [selectCategory, setSelectedCategory] = useState('')
  const [uploading, setUploading] = useState(false) // Track upload state
  const [progress, setProgress] = useState(0) // Track progress
  const [isMenuOpen, setIsMenuOpen] = useState<any>('')

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: 'image' | 'video',
  ) => {
    if (e.target.files && e.target.files[0]) {
      if (type === 'image') {
        setImage(e.target.files[0])
      } else if (type === 'video') {
        setVideo(e.target.files[0])
      }
    }
  }

  const handleSelectChange = (value: string) => {
    setSelectedCategory(value)
    console.log('Selected:', value)
  }

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!image || !video || !title || !description) {
      console.error('Please provide all fields')
      return
    }

    setUploading(true)

    try {
      // Step 1: Upload image to Firebase Storage
      const imageStorageRef = ref(storage, `courses/images/${image.name}`)
      const imageUploadTask = uploadBytesResumable(imageStorageRef, image)

      // Step 2: Upload video to Firebase Storage
      const videoStorageRef = ref(storage, `courses/videos/${video.name}`)
      const videoUploadTask = uploadBytesResumable(videoStorageRef, video)

      // Track image upload progress
      imageUploadTask.on(
        'state_changed',
        (snapshot: UploadTaskSnapshot) => {
          const progressValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setProgress(progressValue) // Update progress
          console.log(`Image upload is ${progressValue}% done`)
        },
        (error) => {
          console.error('Image upload error:', error.message)
          setUploading(false)
        },
      )

      // Track video upload progress
      videoUploadTask.on(
        'state_changed',
        (snapshot: UploadTaskSnapshot) => {
          const progressValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setProgress(progressValue) // Update progress for video upload
          console.log(`Video upload is ${progressValue}% done`)
        },
        (error) => {
          console.error('Video upload error:', error.message)
          setUploading(false)
        },
      )

      // Wait for both uploads to complete
      const [imageSnapshot, videoSnapshot] = await Promise.all([
        imageUploadTask,
        videoUploadTask,
      ])

      // Step 3: Get the download URLs after both uploads are complete
      const imageDownloadURL = await getDownloadURL(imageSnapshot.ref)
      const videoDownloadURL = await getDownloadURL(videoSnapshot.ref)

      console.log(
        'Image and video uploaded successfully, URLs:',
        imageDownloadURL,
        videoDownloadURL,
      )

      // Step 4: Save the course data (title, description, image URL, video URL) to Firestore
      await addDoc(collection(db, 'courses'), {
        imageURL: imageDownloadURL, // Store image URL
        videoURL: videoDownloadURL, // Store video URL
        title,
        description,
        price,
        selectCategory,
        createdAt: serverTimestamp(),
      })

      console.log('Course added to Firestore')
      setUploading(false)

      // Reset form fields
      setTitle('')
      setDescription('')
      setImage(null)
      setVideo(null)
    } catch (error) {
      console.error('Error uploading course:', error)
      setUploading(false)
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.controlBar}>
        <DashboardNavigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        >
          <MobileMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            adminLinks={true}
          />
        </DashboardNavigation>
      </div>

      <div className={styles.formWrapper}>
        <h1>Add COurse</h1>
        <form onSubmit={handleUpload} className={styles.form}>
          <input
            type='text'
            placeholder='Course Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className={styles.title}
          />
          <textarea
            placeholder='Course Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className={styles.desc}
          />
          <div className={styles.imageWrapper}>
            <label htmlFor='file'>Image</label>
            <input
              type='file'
              accept='image/*'
              placeholder='video'
              onChange={(e) => handleChange(e, 'image')}
              required
              className={styles.image}
            />
          </div>

          <div className={styles.videoWrapper}>
            <label htmlFor='file'>Video</label>
            <input
              type='file'
              accept='video/*'
              onChange={(e) => handleChange(e, 'video')}
              required
              className={styles.video}
            />
          </div>

          <input
            type='text'
            placeholder='Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className={styles.title}
          />

          <div className={styles.selectWrapper}>
            <Select
              // onChange={(e) => setCategory(e.target.value)}
              options={options}
              value={selectCategory}
              onChange={handleSelectChange}
              label='Category:'
              className={styles.title}
              required
            />
          </div>

          <button type='submit' disabled={uploading} className={styles.button}>
            {uploading ? `Uploading (${progress.toFixed(2)}%)` : 'Add Course'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddCourse
