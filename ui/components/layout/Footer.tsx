import boxProperty from '@/lib/utilities/boxProperty'
import displayFlex from '@/lib/utilities/displayFlex'
import mq from '@/lib/utilities/mediaQueries'
import Themes from '@/lib/utilities/themes'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <p>&copy; 2024 techLinage. All Rights Reserved.</p>
      <div className='footerLinks'>
        {['About', 'Privacy Policy', 'Licensing', 'Contact'].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(' ', '-')}`}
            className='footerLink'
            scroll={false}
          >
            {item}
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
  grid-area: f;
  ${mq('mobileS')(`
    ${boxProperty('100%', '100%')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.25rem;
    background-color: ${Themes.$black};
    color:${Themes.$white};

    .footerLinks {
    ${boxProperty('400px', '100%')};
      ${displayFlex('space-around', 'center', 'row nowrap')};
      margin-top: 0.5rem;
      color:abstracts.$white;
      text-decoration: none;
      margin: 0 0.5rem; 
    }

    .footerLink {
      color:${Themes.$white};
      &:hover {
        text-decoration: underline;
      }
    }
  `)}
`
