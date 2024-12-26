import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import boxProperty from '@/fp/boxProperty'

const Container = styled.div`
  ${boxProperty('100%', '100%', '', '0px', 'inherit')};

  a {
    text-decoration: none;
  }
`

export default function AlreadyHaveAnAccount(props: any) {
  if (props.admin) {
    return (
      <Container>
        Already a have an account ?{' '}
        <Link href='/auth/signin/admin'>Sign In</Link>
      </Container>
    )
  } else {
    return (
      <Container>
        Already a have an account ?{' '}
        <Link href='/auth/signin/email'>Sign In</Link>
      </Container>
    )
  }
}
