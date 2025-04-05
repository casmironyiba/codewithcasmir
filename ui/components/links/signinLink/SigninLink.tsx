import boxProperty from '@/lib/utilities/boxProperty'
import displayFlex from '@/lib/utilities/displayFlex'
import Themes from '@/lib/utilities/themes'
import { Box, CircleArrowRight } from 'lucide-react'
// import Link from 'next/link'
import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  children?: React.ReactNode
  className?: string
}
const SigninLink: FC<Props> = ({ children = 'Sign in ', className }) => {
  return (
    <Link href={'/signin/email'} className={className}>
      {children}

      <CircleArrowRight size={15} color={Themes.$white} />
    </Link>
  )
}

export default SigninLink

const Link = styled.a`
  ${boxProperty('100%', '100%')};
  ${displayFlex('flex-end', 'center', 'row nowrap')};
  gap:10px;
  font-size:.9rem;
`
