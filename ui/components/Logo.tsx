import React from 'react'
import SiteInfo from '@/ui/components/siteInfo/SiteInfo'
import styled from 'styled-components'
import Icon from '@/public/icons/logo.svg'
import Image from 'next/image'
import mq from '@/helpers/mediaQueries'
import boxProperty from '@/helpers/boxProperty'
import remsize from '@/helpers/remsize'
import displayFlex from '@/helpers/displayFlex'

export function LogoIcon() {
  return (
    <Wrapper>
      <Image src={Icon} alt={'logo'} />
    </Wrapper>
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

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

`

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
