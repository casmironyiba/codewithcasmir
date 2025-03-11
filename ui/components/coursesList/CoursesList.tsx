import React, { FC } from 'react'
import styles from './coursesList.module.scss'
import Link from 'next/link'
import Image from 'next/image'


const CoursesList = ({ courses }: any) => {
  return (
    <table className={styles.container}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableRow}>
          <td>image</td>
          <td>title</td>
          <td>category</td>
          <td>price</td>
          <td>Create At</td>
          <td>Action</td>
        </tr>
      </thead>

      <tbody className={styles.tableBody}>
        {courses.map((course: any) => (
          <tr className={styles.tableRow} key={course.id}>
            <td >
              {course.imageURL && (
                <Image src={course.imageURL} alt={course.title} width='200' height='30' className={styles.img}/>
              )}
            </td>
            <td>{course.title}</td>
            <td>{course.category}</td>
            <td>{course.price}</td>
            <td>22-04-2024</td>
            <td>
              <div className={styles.buttons}>
                <Link
                  href={`/admin/courses/${course.id}`}
                  className={`${styles.link} ${styles.viewLink}`}
                >
                  <button className={`${styles.button} ${styles.viewButton}`}>
                    View
                  </button>
                </Link>
                <Link
                  href={`/admin/courses/${course.id}`}
                  className={`${styles.link} ${styles.deleteLink}`}
                >
                  <button className={`${styles.button} ${styles.deleteButton}`}>
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CoursesList
