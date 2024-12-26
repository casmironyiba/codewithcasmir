import React from 'react'
import ImageSlider from '../imageSlider/ImageSlider';
import styles from './homeLayout2.module.scss'

export default function HomeLayout2() {
  const images = [
    { src: '/images/image02.jpeg', alt: 'Image 1' },
    { src: '/images/image03.jpeg', alt: 'Image 1' },
    { src: '/images/image04.jpeg', alt: 'Image 1' },
    { src: '/images/image36.jpg', alt: 'Image 1' },
    { src: '/images/image35.webp', alt: 'Image 2' },
    { src: '/images/image6.webp', alt: 'Image 3' },
    { src: '/images/image4.jpg', alt: 'Image 4' },
    { src: '/images/image10.jpeg', alt: 'Image 3' },
  ];

  return (
    <div className={styles.container}>
      <ImageSlider images={images} time={4000}/>
    </div>
  )
}
