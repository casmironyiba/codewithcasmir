import boxProperty from '@/fp/boxProperty'
import displayFlex from '@/fp/displayFlex'
import mq from '@/fp/mediaQueries'
import remsize from '@/fp/remsize'
import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  user: any
  visitors: any
  members: any
}

const Card = (props:any) => {
  if (props.user) {
    return (
      <Container>
        <div className='wrapper'>
          <span className='title'> Total Users</span>
          <span className='numbers'>20.273</span>
          <span className='detail'>
            <span className='positive'>15% </span>
            more than previous week
          </span>
        </div>
      </Container>
    )
  }
  if (props.visitors) {
    return (
      <Container>
        <div className='wrapper'>
          <span className='title'> Total Visitors</span>
          <span className='numbers'>50.273</span>
          <span className='detail'>
            <span className='positive'>10% </span>
            more than previous week
          </span>
        </div>
      </Container>
    )
  }

  if (props.transactions) {
    return (
      <Container>
        <div className='wrapper'>
          <span className='title'> Total Transactions</span>
          <span className='numbers'>30</span>
          <span className='detail'>
            <span className='positive'>5% </span>
            more than previous week
          </span>
        </div>
      </Container>
    )
  } else {
    null
  }
}

export default Card

const Container = styled.div`
  ${mq('mobileS')(`
      ${boxProperty('90%', remsize(120), '', remsize(5), '#192237')};
    border-radius:5px;
    .wrapper {
      ${boxProperty('100%', '100%', '', remsize(5), 'inherit')};
      ${displayFlex('space-around', 'center', 'column nowrap')};
      color:white;

      .detail {
        font-size:.9rem;
        }
      }
`)}

  ${mq('tablet')(`
      width:250px;

    .wrapper {
    }


`)}
`
