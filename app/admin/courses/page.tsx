'use client'
import React, { useState, useEffect, ChangeEvent } from 'react'
import IUser  from '@/types/IUser'
import Linker from '@/ui/components/common/Linker'
import SearchBar from '@/ui/components/common/SearchBar'
import DashboardNavigationInterface from '@/types/DashboardNavigationInterface'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation'
import styles from './courses.module.scss'
import MobileMenu from '@/ui/components/dashboardMobileMenu/MobileMenu'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/helpers/firebaseConfig'
import CoursesList from '@/ui/components/coursesList/CoursesList'
import CourseInterface from '@/ui/interface/CourseInterface'


const Courses: React.FC<DashboardNavigationInterface> = () => {
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([])
  const [error, setError] = useState<string | null>(null)
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState<any>('')

  const fetchCourses = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'courses'))
      const fetchedCourses: Course[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(), // Spread the course data (title, description, imageURL)
      })) as Course[]

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
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.username.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query),
    )
    setFilteredUsers(filtered)
  }

  if (error) {
    return <p>{error}</p>
  }

  if (loading) {
    return <p>Loading courses...</p>
  }

  if (courses.length === 0) {
    return <p>No courses available</p>
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
            adminLinks
          />
        </DashboardNavigation>

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
