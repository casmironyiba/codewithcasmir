// 'use client';
// import React from 'react'
// import styles from './footer.module.scss';
// import SocialProfiles from '@/ui/components/socialProfiles/SocialProfiles';
// import Policy from '@/ui/components/footer/Policy';
// import YearInfo from '@/ui/components/yearInfo/YearInfo';
// import { Roboto } from 'next/font/google';
//
//
// const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });
//
// export default function Footer() {
//   return (
//     <footer className={` ${styles.container} ${roboto.className}`}>
//       <YearInfo />
//       <SocialProfiles />
//       <Policy />
//     </footer>
//   )
// }
//
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

// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 1.25rem;
// `

const Container = styled.footer`
  grid-area: f;
  ${mq('mobileS')(`
    ${boxProperty('100%', '100%')};
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.25rem;
      background-color: ${Themes.$dark};


      .footerLinks {
      margin-top: 0.5rem;
      }

    .footerLink {
      color: var(--primary-500);
      margin: 0 0.5rem; /* Equivalent to mx-2 */
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
  `)}
`
