import React, { FC } from 'react'
import styles from './updateCourseImage.module.scss'
import Imager from '@/ui/components/imager/Imager'
import ImageIcon from '@mui/icons-material/Image'

interface Image {
  course: any
  setSelectedImage: any
}

const UpdateCourseImage: FC<Image> = ({ course,setSelectedImage}) => {

  const handleImageChange = (event: any) => {
    const file = event.target.files[0]
    if (file) {
      setSelectedImage(file.name)
      console.log(`Selected file: ${file.name}`)
    }
  }
  return (
    <div className={styles.imgContainer}>
      <div className={styles.imgWrapper}>
        {course?.imageURL && (
          <Imager
            src={course.imageURL}
            alt={course.title}
            objectFit='cover'
            layout='fill'
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.inputImageIconWrapper}>
        <input
          type='file'
          id='file-input'
          className={styles.fileInput}
          onChange={handleImageChange}
        />
        <label htmlFor='file-input' className={styles.fileLabel}>
          <span className={styles.materialIcons}>
            <ImageIcon />
          </span>
        </label>
      </div>
    </div>
  )
}

export default UpdateCourseImage
