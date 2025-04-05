import React from 'react'
import { ArrowRightAlt } from '@mui/icons-material'
import SignupLink from './links/signupLink/SignupLink'
import styled from 'styled-components'
import mq from '@/lib/utilities/mediaQueries'
import displayFlex from '@/lib/utilities/displayFlex'
import boxProperty from '@/lib/utilities/boxProperty'
import Themes from '@/lib/utilities/themes'

export default function Enroll() {
  return (
    <Container>
      <h3 className='textWrapper'>
        <span className='yellow'>All the </span>
        <span className='white'> coding courses </span>
        <span className='yellow'>you to excel </span>
        <span className='white'>are in one place. </span>
      </h3>
      <SignupLink className='link'>
        GET STARTED (FREE)
        <ArrowRightAlt />
      </SignupLink>
    </Container>
  )
}

const Container = styled.div`
  ${mq('mobileS')(`
    ${boxProperty('100%', '150px', '', '2px', 'inherit')};
    ${displayFlex('space-around', 'flex-start', 'column nowrap')};

    .textWrapper {
      font-size: 1.2rem;
      font-weight: 100;
      .yellow {
        color: ${Themes.$yellow};
      }
      .white {
        color: ${Themes.$white};
      }
    }

    .link {
      ${boxProperty('130px', '30px', '', '3', Themes.$blue)};
      ${displayFlex('space-around', 'center')};
      font-size: 0.6rem;
      font-weight: 600;
      text-decoration: none;
      border-radius: 50px;
      color: abstracts.$white;
      background: pink;

      &:hover {
        width: 220px;
      }
  }
  `)}

  ${mq('mobileM')(`
    height: '130px';
    // background:red;

.textWrapper {

    font-size:1.4rem;
  }
`)}

  ${mq('tablet')(`
    width: 100%;
    height: 150px;

    .link {
        width:200px;
        height:40px;
      }

`)}
`
