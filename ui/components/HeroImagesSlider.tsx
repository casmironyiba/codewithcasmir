import React from 'react'
import Image from 'next/image'
import { useCarousel } from './useCarousel'
import styled from 'styled-components'

const HeroImageSlider = () => {
  const currentImage = useCarousel({ totalImages: 3 })

  return (
    <Container>
      {[
        '/images/heroImages/hero1.jpg',
        '/images/heroImages/hero2.jpg',
        '/images/heroImages/hero3.jpg',
      ].map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Hero Banner ${index + 1}`}
          fill
          priority={index === currentImage}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className={`heroImage ${index === currentImage ? 'heroImage--active' : ''
            }`}
        />
      ))}
      ppp
    </Container>
  )
}

export default HeroImageSlider

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-basis: 50%; // Equivalent to basis-1/2
  height: 100%; // Equivalent to h-full
  position: relative; // Equivalent to relative
  overflow: hidden; // Equivalent to overflow-hidden
  border-top-right-radius: 0.5rem; // Equivalent to rounded-r-lg
  border-bottom-right-radius: 0.5rem;

  .heroImage {
    object-fit: cover; // Equivalent to object-cover
    transition: opacity 0.5s ease-in-out; // Equivalent to transition-opacity duration-500
    opacity: 0; // Equivalent to opacity-0
  }
  .heroImage--active {
    opacity: 1; // Equivalent to opacity-100
  }
`
