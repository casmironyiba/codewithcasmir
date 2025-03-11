import styled from 'styled-components'
import boxProperty from '@/lib/utilities/boxProperty';
import displayFlex from '@/lib/utilities/displayFlex';

const ViewLink = styled.a`
  ${boxProperty('100%','100%','0px','0px','inherit')};
  ${displayFlex('center','center')};
  background-color: grey;
  font-size: 0.8rem;
  display:flex;
  border-radius:10px;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`
export default ViewLink
