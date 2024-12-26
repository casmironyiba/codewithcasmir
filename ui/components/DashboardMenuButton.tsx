import React, { FC, useRef, useEffect, useState } from 'react'
import DashboardNavigationInterface from '@/ui/interface/DashboardNavigationInterface'
import styled from 'styled-components'
import mq from '@/fp/mediaQueries'
import MenuIcon, { MenuOpenIcon } from './MenuIcon'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded'

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
        <MenuOpenRoundedIcon className='menuOpenIcon' ref={menuOpenIconRef} />
      </div>

      <div className='menuIconWrapper' ref={menuIconRef}>
        <MenuRoundedIcon sx={{fontSize:'30px'}} className='menuIcon' />
      </div>
    </Container>
  )
}

const Container = styled.div`
  ${mq('mobileS')(`
    width: 60px;
    height:100%;
    padding-left:10px;
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
