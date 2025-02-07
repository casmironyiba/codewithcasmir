import styled from 'styled-components'
import Button from '../button/Button'
import boxProperty from '@/fp/boxProperty'
import displayFlex from '@/fp/displayFlex'

const ViewLink = styled.link`
  width: 100%;
  height: 100%;
  ${boxProperty('100%','100%','0px','0px','inherit')};
  ${displayFlex('center','center')};
  text-align:center;
  background-color: blue;
  font-size: 0.8rem;
  border-radius:10px;
  color: white;
  border: none;
  cursor: pointer;
  text-align:center;
`
export default ViewLink
