import React from 'react'
import styles from './homeLayout3.module.scss'
import ImageSlider from '../imageSlider/ImageSlider'

export default function HomeLayout3() {
  const images = [
    { src: '/icons/icon1.webp', alt: 'icon1' },
    { src: '/icons/icon2.webp', alt: 'icon2' },
    { src: '/icons/icon3.webp', alt: 'icon3' },
    { src: '/icons/icon4.webp', alt: 'icon4' },
    { src: '/icons/icon5.webp', alt: 'icon5' },
  ]

  return (
    <div className={styles.container}>
      <ImageSlider images={images} time={6000} />
    </div>
  )
}
