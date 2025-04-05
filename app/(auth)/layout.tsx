'use client'

import displayFlex from '@/lib/utilities/displayFlex'
import mq from '@/lib/utilities/mediaQueries'
import Themes from '@/lib/utilities/themes'
import React from 'react'
import styled from 'styled-components'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <main className='authLayoutMain'>{children}</main>
    </Container>
  )
}

export default Layout

const Container = styled.div`
  ${mq('mobileS')(`
  width: 100%;
  height: 100%;
  background-color: ${Themes.$auth};
  ${displayFlex('center','center')};

.authLayoutMain {
  width: 300px;
  height: '';
  padding: 10px;
  border-radius: 10px;
  background-color: ${Themes.$authInner};
};
`)}

  ${mq('tablet')(`
  .authLayoutMain {
      width:350px;
    }
`)}
`
