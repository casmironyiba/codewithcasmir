'use client'

import { useState, useEffect, use } from 'react'
import styles from './coursesID.module.scss'
import { updateCourseData } from '@/lib/helpers/updateCourse'
import CourseInterface from '@/types/CourseInterface'
import ViewCourseData from '@/ui/components/viewCourseData/ViewCourseData'
import MobileControlBar from '@/ui/components/mobileControlBar/MobileControlBar'
import UpdateCourseImage from '@/ui/components/updateCourseImage/UpdateCourseImage'
import { UpdateCourseProperties } from '@/ui/components/updateCourseProperties/UpdateCourseProperties'
import AddMore from '@/ui/components/AddMore'
import UpdateButton from '@/ui/components/common/button/UpdateButton'
import fetchCourse from '@/lib/helpers/fetchCourse'

interface CoursePageProps {
  params: Promise<{ id: string }>
}

export default function CoursePage({ params }: CoursePageProps) {
  const { id } = use(params)

  const [videos, setVideos] = useState<{ file: File | null; name: string }[]>(
    [],
  )
  const [materials, setMaterials] = useState<
    { file: File | null; name: string }[]
  >([])
  const [assignments, setAssignments] = useState<
    { file: File | null; name: string }[]
  >([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState<number | string>('')
  const [course, setCourse] = useState<CourseInterface | null>(null)
  const [image, setImage] = useState<File | null>(null)
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const [courseVideos, setCourseVideos] = useState<any>([])
  const [isMenuOpen, setIsMenuOpen] = useState<any>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const message = await updateCourseData(id, videos, materials, assignments)
      alert(message)
    } catch (err) {
      console.error(err)
      alert('Error updating course!')
    }
  }
  useEffect(() => {
    async function loadCourse() {
      const { courseData } = await fetchCourse({ id })
      if (courseData) {
        setCourse(courseData)
        setTitle(courseData.title || '')
        setDescription(courseData.description || '')
        setCategory(courseData.category || '')
        setPrice(courseData.price || '')
      }

      // console.log(course)
    }

    loadCourse()
  }, [id])
  console.log(courseVideos)

  return (
    <div className={styles.container}>
      <div className={styles.mobileControlBarWrapper}>
        <MobileControlBar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.section1}>
          <UpdateCourseImage
            course={course}
            setSelectedImage={setSelectedImage}
          />
        </div>

        <div className={styles.section2}>
          <UpdateCourseProperties
            title={title}
            setTitle={setTitle}
            price={price}
            setPrice={setPrice}
            description={description}
            setDescription={setDescription}
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div className={styles.section3}>
          <AddMore
            videos={videos}
            setVideos={setVideos}
            materials={materials}
            setMaterials={setMaterials}
            assignments={assignments}
            setAssignments={setAssignments}
            courseVideos={courseVideos}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <UpdateButton type='submit' label='Update Course' />
        </div>
      </form>
    </div>
  )
}
