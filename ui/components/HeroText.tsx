import React from 'react'
import styled from 'styled-components'
import mq from '@/lib/utilities/mediaQueries'
import boxProperty from '@/lib/utilities/boxProperty'
import Themes from '@/lib/utilities/themes'
import displayFlex from '@/lib/utilities/displayFlex'

export default function HomeInfoText() {
  return (
    <Container>
      <h1 className='text'>
        <span className='white'>Become a certified </span>
        <span className='green'>software engineer that will </span>
        <span className='white'> lead you to work </span>
        <span className='red'> any company of your choice</span>
      </h1>
    </Container>
  )
}

const Container = styled.div`
  ${mq('mobileS')(`
    ${boxProperty('100%', '', '', '5px', 'inherit')};

    .text {
      color: ${Themes.$white};
        font-size: 23px;
    }

    .white {
      color: ${Themes.$white};
    }

    .green {
      color: ${Themes.$lightgreen};
    }

    .red {
      color: palevioletred;
    }
`)};

  ${mq('mobileM')(`
    font-size: 35px;
`)}

  ${mq('tablet')(`
    height: 150px;
    ${displayFlex('space-around', 'center', 'column nowrap')};
    padding: 10px;
    font-size: 35px;

`)}

${mq('laptop')(`
    ${boxProperty('100%', '200px', '', '2px', Themes.$purple)};
    ${displayFlex('center', 'center')};
    background: inherit;

    .text {
      font-size: 35px;
    }
`)}
`
