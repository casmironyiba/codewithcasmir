import React from 'react'
import HeroText from './HeroText'
import HeroEnroll from './HeroEnroll'
import styled from 'styled-components'
import mq from '@/lib/utilities/mediaQueries'
import boxProperty from '@/lib/utilities/boxProperty'
import displayFlex from '@/lib/utilities/displayFlex'
import Themes from '@/lib/utilities/themes'
import HeroImageSlider from './HeroImagesSlider'

export default function Hero() {
  return (
    <Container>
      <div className={'section1'}>
        <HeroText />
        <HeroEnroll />
      </div>
      <div className={'heroSliderWrapper'}>
        <HeroImageSlider />
      </div>
    </Container>
  )
}

const Container = styled.div`
  ${mq('mobileS')(`
    ${boxProperty('100%', '100%', '', '0px', Themes.$heroDark)};
    ${displayFlex('space-between', 'center', 'row nowrap')};
    border-radius:20px;
        font-size:.8rem;

    .section1 {
      ${boxProperty('48%', '100%', '', '10px','inherit')};
      @include abstracts.displayFlex(space-between, center, column nowrap);
      gap: 20px;
      border-radius: 10px 0px 0px 10px;
    };

    .heroSliderWrapper {
      ${boxProperty('50%', '100%')};
      border-radius: 0px 10px 10px 0px;
    }

  `)}

  ${mq('tablet')(`
    flex-flow:row nowrap;
    width:100%;
    margin:auto;



    .section1 {
      ${displayFlex('space-between', 'center', 'column nowrap')};
   }

   .heroSliderWrapper {
  }
  `)}
`
