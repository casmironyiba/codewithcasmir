'use client'

import React, { useState } from 'react'
import NonDashboardNavbar from '@/ui/components/nonDashboardNavbar/NonDashboardNavbar'
import Footer from '@/ui/components/layout/Footer'
import styled from 'styled-components'
import boxProperty from '@/lib/utilities/boxProperty'
import Themes from '@/lib/utilities/themes'
import mq from '@/lib/utilities/mediaQueries'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false)
  return (
    <Container>
      <NonDashboardNavbar
        isNavBarOpen={isNavBarOpen}
        setIsNavBarOpen={setIsNavBarOpen}
      />
      <main className='main'>{children}</main>
      <Footer />
    </Container>
  )
}

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
//   width: 100%;
//
//   .layoutMain {
//     display: flex;
//     flex-grow: 1;
//     width: 100%;
//     height: 100%;
//     justify-content: center;
//     align-items: center;
//   }
// `

const Container = styled.div`
  display: grid;
  ${mq('mobileS')(`
  
    ${boxProperty('100%', '100vh', 'auto', '0px', Themes.$black)};
    background:${Themes.$special};
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: 80px auto 80px;
    grid-template-areas:
      'n n n n n n n n n n '
      'm m m m m m m m m m'
      'f f f f f f f f f f ';

    .main {
      display: flex;
      grid-area:m;
      flex-grow: 1;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  `)}

  ${mq('tablet')(`
    // grid-template-rows: 80px auto 400px;
  `)}

  ${mq('laptop')(`
    ${boxProperty('100%', '', 'auto', '0px')};
    padding-left:100px;
    padding-right:100px;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: 70px auto 50px;
    grid-template-areas:
      'n n n n n n n n n n '
      'm m m m m m m m m m'
      'f f f f f f f f f f ';
  `)}

  ${mq('laptopL')(`
    padding-left:200px;
    padding-right:200px;

  `)}
`
