import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import mq from '@/lib/utilities/mediaQueries'
import boxProperty from '@/lib/utilities/boxProperty'
import Themes from '@/lib/utilities/themes'
import displayFlex from '@/lib/utilities/displayFlex'

export default function Policy() {
  return (
    <Container>
      <ul className='wrapper'>
        <li>
          <Link href='/terms'>
            Terms of Use
          </Link>
        </li>

        <li>
          <Link href='privacy'>
            Privacy Policy
          </Link>
        </li>
      </ul>
    </Container>
  )
}


const Container = styled.div`
    ${mq('mobileS') (`
      ${boxProperty ('250px','40px','','5px',Themes.$yellow)};

      .wrapper {
        ${boxProperty('100%','100%','','0px')};
        ${displayFlex('space-between','center','row nowrap')};

        &>li {
          list-style: none;

          &>a {
            color: abstracts.$white;
            text-decoration: none;
          }
        }

      }
    `)}

  ${mq('tablet') (`
    width: 250px;
  `)};
`
