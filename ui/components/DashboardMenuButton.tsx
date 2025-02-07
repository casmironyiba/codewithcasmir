import React, { FC, useRef, useEffect, useState } from 'react'
import DashboardNavigationInterface from '@/types/DashboardNavigationInterface'
import styled from 'styled-components'
import mq from '@/lib/utilities/mediaQueries'
import {MenuIcon,MenuOpenIcon} from '@/ui/components/common/MenuIcon'
export const DashboardMenuButton: FC<DashboardNavigationInterface> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const menuRef = useRef<any>(null)
  const menuOpenIconRef = useRef<any>(null)
  const menuIconRef = useRef<any>(null)
  const [icon, setIcon] = useState<boolean>(false)

  useEffect(() => {
    const handleMenuClick = () => {
      setIsMenuOpen((prev) => !prev)
      console.log('menu button clicking')
    }

    menuRef.current?.addEventListener('click', handleMenuClick)

    return () => {
      menuRef.current?.removeEventListener('click', handleMenuClick)
    }
  }, [isMenuOpen, setIsMenuOpen])

  const containerClass = isMenuOpen ? Container : MenuClose
  return (
    <Container className={containerClass} ref={menuRef}>
      <div className='menuOpenIconWrapper' ref={menuOpenIconRef}>
        <MenuOpenIcon sx={{fontSize:'30px',color:'white'}} className='menuOpenIcon' ref={menuOpenIconRef} />
      </div>

      <div className='menuIconWrapper' >
        <MenuIcon sx={{fontSize:'30px', color:'white'}} className='menuIcon' ref={menuIconRef}/>
      </div>
    </Container>
  )
}

const Container = styled.div`
  ${mq('mobileS')(`
    width: 100%;
    height:100%;
    // padding-left:10px;
    z-index:10;

    .menuOpenIconWrapper {
        .menuOpenIcon {
        display:none
      }
    }
  `)};
`
const MenuClose = styled.div`
  ${mq('mobileS')(`
    width: 100%;
    height:100%;
    padding: 0px;
    position: relative; 
    background:red;
    

    .menuIconWrapper {
      .menuIcon {
          display:none
      }
    }

    .menuOpenIconWrapper {
      .menuOpenIcon {
        display:inline-block;
      }
    }
  `)};

  ${mq('laptop')(`
    display: none;
  `)};
`
