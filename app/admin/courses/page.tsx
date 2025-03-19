'use client'
import React, { useState, useEffect, ChangeEvent } from 'react'
import Linker from '@/ui/components/common/Linker'
import SearchBar from '@/ui/components/common/SearchBar'
import IDashboardNavigation from '@/types/IDashboardNavigation'
import styles from './courses.module.scss'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/helpers/firebaseConfig'
import CoursesList from '@/ui/components/coursesList/CoursesList'
import ICourse from '@/types/ICourse'
import PageLoader from '@/ui/components/Loader'

const Courses: React.FC<IDashboardNavigation> = () => {
  const [filteredCourses, setFilteredCourses] = useState<ICourse[]>([])
  const [error, setError] = useState<string | null>(null)
  const [courses, setCourses] = useState<ICourse[]>([])
  const [loading, setLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState<any>('')

console.log(filteredCourses)
console.log(courses)
  const fetchCourses = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'courses'))
      const fetchedCourses: ICourse[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(), // Spread the course data (title, description, imageURL)
      })) as ICourse[]

      setCourses(fetchedCourses)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching courses:', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const query = e.target.value.toLowerCase()
    const filtered = courses.filter(
      (course) =>
        course?.title.toLowerCase().includes(query) ||
        course?.price.toLowerCase().includes(query) ||
        course?.category?.toLowerCase().includes(query),
    )
    setFilteredCourses(filtered)
  }

  if (error) {
    return <p>{error}</p>
  }

  if (loading) {
    return <PageLoader />
  }

  if (courses.length === 0) {
    return <p>No courses available</p>
  }

  return (
    <div className={styles.container}>
      <div className={styles.controlBar}>

        <div className={styles.searchbarWrapper}>
          <SearchBar placeholder='Search users...' onChange={handleSearch} />
        </div>

        <div className={styles.adduserWrapper}>
          <Linker href='/admin/addcourse'>Add Course</Linker>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <CoursesList courses={courses} />
      </div>
    </div>
  )
}
export default Courses
