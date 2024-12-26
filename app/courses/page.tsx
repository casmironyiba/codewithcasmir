import React from 'react'
import styles from './courses.module.scss'
import CourseCard from '@/ui/components/coursesCard/CoursesCard'


const courses = [
  {
    title: 'Next.js Basics',
    description:
      'Learn the fundamentals of Next.js and how to build powerful web applications.',
    imageUrl: '/images/image04.jpeg',
    duration: '3 hours',
  },
  {
    title: 'Advanced React Patterns',
    description:
      'Dive deep into advanced patterns and techniques for building React applications.',
    imageUrl: '/images/image04.jpeg',
    duration: '5 hours',
  },
  {
    title: 'Advanced React Patterns',
    description:
      'Dive deep into advanced patterns and techniques for building React applications.',
    imageUrl: '/images/image04.jpeg',
    duration: '5 hours',
  },
  {
    title: 'Advanced React Patterns',
    description:
      'Dive deep into advanced patterns and techniques for building React applications.',
    imageUrl: '/images/image04.jpeg',
    duration: '5 hours',
  },
  {
    title: 'Advanced React Patterns',
    description:
      'Dive deep into advanced patterns and techniques for building React applications.',
    imageUrl: '/images/image04.jpeg',
    duration: '5 hours',
  },
]

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
      <h1> Find a course that suits your career</h1>
      </div>
      <div
        style={{ display: 'flex', gap: '16px' }}
        className={styles.courseWrapper}
      >
        {courses.map((course) => (
          <CourseCard
            key={course.title}
            title={course.title}
            description={course.description}
            imageUrl={course.imageUrl}
            duration={course.duration}
          />
        ))}
      </div>
    </div>
  )
}
