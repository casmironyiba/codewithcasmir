import displayFlex from '@/lib/utilities/displayFlex'
import React from 'react'
import { ThreeCircles,Bars } from 'react-loader-spinner'
import styled from 'styled-components'

export default function PageLoader() {
  return (
    <Container>
      <ThreeCircles
        height='80'
        width='80'
        color='purple'
        ariaLabel='three-dots-loading'
      />
    </Container>
  )
}

export function fileLoader() {
  return (
    <Container>
      <Bars
        height='80'
        width='80'
        color='purple'
        ariaLabel='three-dots-loading'
      />
    </Container>
  )
}


 const Container =styled.div`
 width:100%;
 height:100vh;
 ${displayFlex('center','center')};
 background:red;
 `
