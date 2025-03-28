import React, { FC, forwardRef } from 'react'
import SiteInfo from '@/ui/components/siteInfo/SiteInfo'
import styled from 'styled-components'
import Icon from '@/public/icons/logo.svg'
import Image from 'next/image'
import mq from '@/lib/utilities/mediaQueries'
import boxProperty from '@/lib/utilities/boxProperty'
import remsize from '@/lib/utilities/remsize'
import displayFlex from '@/lib/utilities/displayFlex'

interface Props {
  width?: string | number
  height?: string | number
  className?: any
  style?: any
}

export const LogoIcon: FC<Props> = ({ width, height, className, style }) => {
  return (
    <Wrapper>
      <Image className={className} src={Icon} style={style} alt='logo' />
    </Wrapper>
  )
}

const Logo: FC<Props> = ({ width, height, className }) => {
  return (
    <Container className={className} style={{ width, height }}>
      <Image src={Icon} alt={'logo'} />
      <span> {SiteInfo.name} </span>
    </Container>
  )
}

export default Logo

const Container = styled.div`
  ${mq('mobileS')(`
      display:none;
`)}

  ${mq('tablet')(`
    ${displayFlex('space-between', 'flex-end', 'row nowrap')};
    width:100%;
    gap:5px;
    height:100%;
    position:relative;
    font-size:1rem;
    padding: 3px;
    // background:red;

    img {
      width:40%;
      height:100%;
      }

    color:white;
    text-decoration: none;
`)}
`

const Wrapper = styled.div`
  ${mq('tablet')(`
display:none;
`)}
`
