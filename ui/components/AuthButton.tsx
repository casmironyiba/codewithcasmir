import React, { FC } from 'react'
import styled from 'styled-components'
import boxProperty from '@/lib/utilities/boxProperty'
import { ArrowRight, CircleArrowRight, MoveRight } from 'lucide-react'

import Themes from '@/lib/utilities/themes'
import displayFlex from '@/lib/utilities/displayFlex'

interface Prop {
  signup?: any
  signin?: any
  adminSignin?: any
  adminSignup?: any
  forgotpassword?: any
  ref?: any
}

const AuthButton: FC<Prop> = (props: any) => {
  if (props.signup) {
    return (
      <Button type='submit'>
        Sign up
        <CircleArrowRight size={15} color={Themes.$white} />
      </Button>
    )
  }

  if (props.signin) {
    return (
      <>
        <Button type='submit'>
          Sign In
          <CircleArrowRight size={15} color={Themes.$white} />
        </Button>
      </>
    )
  }

  if (props.adminSignin) {
    return (
      <>
        <Button type='submit'>
          Admin SignIn
          <CircleArrowRight size={15} color={Themes.$white} />
        </Button>
      </>
    )
  }

  if (props.adminSignup) {
    return (
      <>
        <Button type='submit'>
          Admin Sign up
          <CircleArrowRight size={15} color={Themes.$white} />
        </Button>
      </>
    )
  }
  if (props.forgotpassword) {
    return (
      <>
        <Button type='submit'>
          Send
          <CircleArrowRight size={15} color={Themes.$white} />
        </Button>
      </>
    )
  }

  if (props.resetPassword) {
    return (
      <>
        <Button type='submit'>
          Reset Password
          <CircleArrowRight size={15} color={Themes.$white} />
        </Button>
      </>
    )
  } else {
    return (
      <>
        <Button type='submit'>
          Sign Up
          <CircleArrowRight size={15} color={Themes.$white} />
        </Button>
      </>
    )
  }
}

export default AuthButton

const Button = styled.button`
  ${boxProperty('100%', '100%', '', '0px', Themes.$authButton)};
  ${displayFlex('center', 'center', 'row nowrap')};
  gap: 10px;
  border: none;
  color: ${Themes.$white};
  font-size: 1rem;
  border-radius: 7px;
}
`
