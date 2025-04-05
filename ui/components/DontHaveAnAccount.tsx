import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import boxProperty from '@/lib/utilities/boxProperty'
import displayFlex from '@/lib/utilities/displayFlex'
import Themes from '@/lib/utilities/themes'
import mq from '@/lib/utilities/mediaQueries'

export default function DontHaveAnAccount(props: any) {
  if (props.admin) {
    return (
      <Container>
        <p>
          Dont have an account ? <Link href='/signup/admin'>Sign Up</Link>
        </p>
      </Container>
    )
  } else {
    return (
      <Container>
        <p>
          Dont have an account ? <Link href='/signup/email'> Sign Up</Link>
        </p>
      </Container>
    )
  }
}

const Container = styled.div`
${mq('mobileS')(`

  ${boxProperty('85%', '100%')};
  ${displayFlex('center', 'center')};


  p {
    width: 100%;
    height: 100%;
    ${displayFlex('space-around', 'center', 'row nowrap')};
    color: ${Themes.$white};
    font-size: 0.8rem;
    a {
      text-decoration: none;
      font-size: 0.8rem;
    }
  }
`)}

${mq('tablet')(`
  ${boxProperty('70%', '100%')};
`)}
`
