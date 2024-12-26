  import React, { useState,useEffect } from 'react';
  import styles from './imageSlider.module.scss';
  import Image from "next/image"


type ImageSliderProps = {
  images: { src: string, alt: string }[];
  time:number
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images,time }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, time); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit='contain'
              className={styles.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

