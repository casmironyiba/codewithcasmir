'use client'

import boxProperty from '@/lib/utilities/boxProperty'
import displayFlex from '@/lib/utilities/displayFlex'
import Themes from '@/lib/utilities/themes'
import {ArrowBack} from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  ${boxProperty('100%', '85%', '', '0px', 'inherit')};
  ${displayFlex('center','center')};
  color:inherit;
  gap:5px;
  border: 2px solid ${Themes.$palevioletred};
  border-radius: 5px;
`

interface Props {
  bgColor?: string
  color?: string
  children: React.ReactNode
}
const GoBackButton: FC<Props> = ({ bgColor, color, children }) => {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.back()}
      style={{ background: bgColor, color: color }}
    >
    <ArrowBack />
      {children}
    </Button>
  )
}

export default GoBackButton
