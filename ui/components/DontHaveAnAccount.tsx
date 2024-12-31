import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import boxProperty from '@/helpers/boxProperty'
import displayFlex from '@/helpers/displayFlex'

export default function DontHaveAnAccount(props: any) {
  if (props.admin) {
    return (
      <Container>
        <p>
          Dont have an account ? <Link href='/auth/signup/admin'>Sign Up</Link>
        </p>
      </Container>
    )
  } else {
    return (
      <Container>
        <p>
          Dont have an account ? <Link href='/auth/signup/email'> Sign Up</Link>
        </p>
      </Container>
    )
  }
}

const Container = styled.div`
  ${boxProperty('100%', '100%', '', '5px')};
  ${displayFlex('center', 'center')};

  p {
    width:100%;
    height:100%;
    ${displayFlex('space-around', 'center', 'row nowrap')};
    // background: red;
    font-size: 0.9rem;
    a {
      text-decoration: none;
      font-size: 1rem;
    }
  }
`
