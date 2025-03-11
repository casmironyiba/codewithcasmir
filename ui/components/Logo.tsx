import React, { FC } from 'react'
import SiteInfo from '@/ui/components/siteInfo/SiteInfo'
import styled from 'styled-components'
import Icon from '@/public/icons/logo.svg'
import Image from 'next/image'
import mq from '@/lib/utilities/mediaQueries'
import boxProperty from '@/lib/utilities/boxProperty'
import remsize from '@/lib/utilities/remsize'
import displayFlex from '@/lib/utilities/displayFlex'

interface Props {
  width?: string
  height?: string
}

export const LogoIcon: FC<Props> = ({ width, height }) => {
  return (
      <Image src={Icon} alt={'logo'} style={{ width, height }} />
  )
}

export default function Logo() {
  return (
    <Container>
      <Image src={Icon} alt={'logo'} />
      {SiteInfo.name}
    </Container>
  )
}

// const Wrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   @include abstracts.displayFlex(center, center);
//   background:blue;
//   border-bottom: 1px solid white;
// `

const Container = styled.div`
  ${mq('mobileS')(`
    ${boxProperty(remsize(130), remsize(50), '', remsize(0))};

    a {
      width:100%;
      height:100%;
      ${displayFlex('space-between', 'center', 'row nowrap')};
      position:relative;
      font-size:1rem;
      padding: 3px;
      display:flex;

      img {
        width:30%;
        height:100%;

        }

      color:white;
      text-decoration: none;
    }
`)}
`
