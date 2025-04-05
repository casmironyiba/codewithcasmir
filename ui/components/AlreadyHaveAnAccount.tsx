import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import boxProperty from '@/lib/utilities/boxProperty'
import mq from '@/lib/utilities/mediaQueries'
import displayFlex from '@/lib/utilities/displayFlex'

export default function AlreadyHaveAnAccount(props: any) {
  if (props.admin) {
    return (
      <Container>
        Already a have an account ?<Link href='/signin/admin'>Sign In</Link>
      </Container>
    )
  } else {
    return (
      <Container>
        Already a have an account ?<Link href='/signin/email'>Sign In</Link>
      </Container>
    )
  }
}

const Container = styled.div`
  ${mq('mobileS')(`
  ${boxProperty('95%', '100%', '', '0px', 'inherit')};
  ${displayFlex('flex-start', 'center', 'row nowrap')};
  gap:10px;

  a {
    text-decoration: none;
  }

  `)}

  ${mq('tablet')(`
  width:80%;

  `)}
`
