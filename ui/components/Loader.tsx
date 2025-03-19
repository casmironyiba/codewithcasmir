import displayFlex from '@/lib/utilities/displayFlex'
import React from 'react'
import { ThreeCircles,Bars } from 'react-loader-spinner'
import styled from 'styled-components'
import { Loader2 } from "lucide-react";

export const Loading = () => {
  return (
    <Container>
      <Loader2 className="loading__spinner" />
      <span className="loading__text">Loading...</span>
    </Container>
  );
};

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
 background:white;
 `
