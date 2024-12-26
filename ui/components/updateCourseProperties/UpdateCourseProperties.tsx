import React, { FC } from 'react'
import styles from './updateCourseProperties.module.scss'
interface CourseProperties {
  title: string
  setTitle: any
  price: any
  setPrice: any
  description: string
  setDescription: any
  category: string
  setCategory: any
}

export const UpdateCourseProperties: FC<CourseProperties> = ({
  title,
  setTitle,
  price,
  setPrice,
  description,
  setDescription,
  category,
  setCategory,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.layout1}>
        <div className={styles.titleWrapper}>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className={styles.priceWrapper}>
          <label htmlFor='price'>Price:</label>
          <input
            type='text'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
      </div>

      <div className={styles.layout2}>
        <div className={styles.descriptionWrapper}>
          <label htmlFor='title'>Desc:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
      </div>

      <div className={styles.layout3}>
        <div className={styles.categoryWrapper}>
          <label htmlFor='category'>Category:</label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
              console.log(category)
            }}
            required
          >
            <option value=''>Select category</option>
            <option value='web'>web</option>
            <option value='app'>app</option>
            <option value='graphics'>graphics</option>
          </select>
        </div>
      </div>
    </div>
  )
}
