'use client'
import Logo from '@/ui/components/Logo'
import NavBar from '@/ui/components/navbar/NavBar'
import React, { FC, useState } from 'react'
import Hamburger from '@/ui/components/hamburger/Hamburger'
import styled from 'styled-components'
import { Roboto } from 'next/font/google'
import mq from '@/lib/utilities/mediaQueries'
import boxProperty from '@/lib/utilities/boxProperty'
import displayFlex from '@/lib/utilities/displayFlex'
import themes from '@/lib/utilities/themes'

interface Props {
  className?: any
};


const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

const Header: FC<Props> = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false)
  return (
    <Container className={` ${roboto.className}`}>
      <div className='wrapper'>
        <Logo />
        <NavBar isNavBarOpen={isNavBarOpen} />
        <Hamburger
          isNavBarOpen={isNavBarOpen}
          setIsNavBarOpen={setIsNavBarOpen}
        />
      </div>
    </Container>
  )
}

export default Header

const Container = styled.header`
  grid-area:h;
  ${mq('mobileS') (`
    ${boxProperty('100%','60px','auto','5px',themes.$dark)};
    ${displayFlex('center','center')};
    position: relative;
    padding: 0;
    font-size:1rem;
    background-color:#0f1e2d;

    .wrapper {
      ${boxProperty('98%','100%','','0px')};
      ${displayFlex('space-between','center','row nowrap')};
    };
  `)};

  ${mq('mobileM') (`
    width: 100%;
  `)};

  ${mq('mobileL') (`
    width: 100%;
  `)};

  ${mq('tablet') (`
    .wrapper {
      height:100%;
    };
  `)};

  ${mq('laptop') (`
    // #signIn:hover {
    // position:relative;
      // }

    .wrapper {
      width:100%;
      height:100%;

      .shoppingcartIcon {
        display:none;
      }

    }
  `)};
`;
