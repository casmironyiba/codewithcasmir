'use client'

import Loading from '@/ui/components/Loader'
import Toolbar from '@/ui/components/ToolBar'
import { Button } from '@/ui/components/Button'
import { createCourse, deleteCourse, getCourses } from '@/actions/courseActions'
import React, { useEffect, useMemo, useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import TeacherCourseCard from '@/ui/components/cards/InstructorCourseCard'
import { useRouter } from 'next/navigation'
import DashboardHeader from '@/ui/components/layout/DashboardHeader'
import styles from './myCourses.module.scss'

const CoursesPage = () => {
  const { user } = useAuth()

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [teacherId, setTeacherId] = useState('')
  const [teacherName, setTeacherName] = useState('')
  const [loading, setLoading] = useState<boolean>(false)

  const [courses, setCourses] = useState<ICourse[]>([])

  const router = useRouter()

  const filteredCourses = useMemo(() => {
    if (!courses) return []

    return courses.filter((course: ICourse) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      const matchesCategory =
        selectedCategory === 'all' || course.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [courses, searchTerm, selectedCategory])

  const handleEdit = (course: ICourse) => {
    router.push(`/instructor/courses/${course.id}`, {
      scroll: false,
    })
  }

  async function handleDelete(courseId: string) {
    try {
      await deleteCourse(courseId)
      setCourses(courses.filter((course: ICourse) => course.id !== courseId))
    } catch (error) {
      console.error('Failed to delete course', error)
    }
  }

  const handleCreateCourse = async () => {
    setLoading(true)
    if (!user) return

    try {
      await createCourse(teacherId, teacherName)
      alert('Course created successfully!')
      setTeacherId('')
      setTeacherName('')
    } catch (err) {
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Loading />

  useEffect(() => {
    async function fetchCourses() {
      try {
        const data = await getCourses()
        setCourses(data)
        console.log(data)
      } catch (error) {
        console.error('Failed to load courses', error)
      }
    }
    fetchCourses()
  }, [])
  return (
    <div className={styles.container}>
      <DashboardHeader
        title='Courses'
        subtitle='Browse your courses'
        rightElement={
          <Button
            onClick={handleCreateCourse}
            className='teacher-courses__header'
          >
            Create Course
          </Button>
        }
      />
      <Toolbar
        onSearch={setSearchTerm}
        onCategoryChange={setSelectedCategory}
      />
      <div className='teacher-courses__grid'>
        {filteredCourses.map((course: ICourse) => (
          <TeacherCourseCard
            key={course.id}
            course={course}
            onEdit={handleEdit}
            onDelete={handleDelete}
            isOwner={course.id === user?.id}
          />
        ))}
      </div>
    </div>
  )
}

export default CoursesPage
