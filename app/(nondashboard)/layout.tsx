'use client'

import React, { useState } from 'react'
import NonDashboardNavbar from '@/ui/components/nonDashboardNavbar/NonDashboardNavbar'
import Footer from '@/ui/components/layout/Footer'
import styled from 'styled-components'
import boxProperty from '@/lib/utilities/boxProperty'
import Themes from '@/lib/utilities/themes'
import mq from '@/lib/utilities/mediaQueries'
import Main from '@/ui/components/layout/Main'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <NonDashboardNavbar />
      <Main className='main'>{children}</Main>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  ${mq('mobileS')(`
  
    ${boxProperty('100%', '', 'auto', '0px', Themes.$black)};
    background:${Themes.$special};
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: 80px auto 70px;
    grid-template-areas:
      'n n n n n n n n n n '
      'm m m m m m m m m m'
      'f f f f f f f f f f ';

  `)}

  ${mq('tablet')(`
    // grid-template-rows: 80px auto 400px;
  `)}

  ${mq('laptop')(`
    padding-left:100px;
    padding-right:100px;
  `)}

  ${mq('laptopL')(`
    // padding-left:200px;
    // padding-right:200px;
  `)}
`
