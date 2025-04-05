import React from 'react'
import Link from 'next/link'
import { CircleArrowRight } from 'lucide-react'
import Themes from '@/lib/utilities/themes'
import styled from 'styled-components'
import displayFlex from '@/lib/utilities/displayFlex'

export default function ForgotpasswordLink() {
  return (
    <Container>
      <Link href='/forgotpassword'>Forgot Password</Link>
      <CircleArrowRight size={15} color={Themes.$white} />
    </Container>
  )
}

const Container = styled.div`
  width: 150px;
  height: 100%;
  // background: yellow;
  ${displayFlex('center', 'center')};
  gap:10px;
  margin-left: auto;

  a {
    color: abstracts.$blue;
    font-size: 0.8rem;
    text-decoration: none;
    text-align: right;
  }
`
