
'use client';
import styled from 'styled-components';
import React from 'react'
import boxProperty from '@/fp/boxProperty';
import { mediaQueries } from '@/fp/mediaQueries';

const Container = styled.div`
  ${mediaQueries('mobileS')(`
    // ${boxProperty(`100%`, `100%`)};
    display:none;
    grid-area:a;
    background: yellow;

  `)}

  ${mediaQueries('laptop')(`
    display:inline-block;
  `)}
`;

export default function SideBar() {
  return (
  <Container>
  </Container>
  )
}
