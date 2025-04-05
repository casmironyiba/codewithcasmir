'use client'
import mq from '@/lib/utilities/mediaQueries'
import { FC, HTMLProps } from 'react'
import styled from 'styled-components'
import themes from '@/lib/utilities/themes'
import displayFlex from '@/lib/utilities/displayFlex'
import boxProperty from '@/lib/utilities/boxProperty'
import {motion} from 'framer-motion';
import Themes from '@/lib/utilities/themes'

// interface Props extends HTMLProps<HTMLDivElement> {
//   children: React.ReactNode
// }
// interface MainProps extends HTMLProps<HTMLDivElement> {
//   // You can add more custom props if needed
// }

// const Main: FC<Props> = ({ children }) => {
//   return <Container>{children}</Container>
// }

// export default Main

const Main = styled(motion.main)`
  grid-area: m;
  ${mq('mobileS')(`
    ${boxProperty('100%', '', '', '0', themes.$white)};
    ${displayFlex('space-between', 'center', 'column nowrap')};
    min-height: 100vh;
    max-height: 9000px;
    // max-height: 3000px;
    // background: linear-gradient(to right, grey,palevioletred);
    background: ${Themes.$special};
`)};

  ${mq('laptop')(`
    height: 100%;
    // @include abstracts.displayFlex(center, center);
    margin: auto;
  }
`)}
`

export default Main
