import boxProperty from '@/fp/boxProperty';
import displayFlex from '@/fp/displayFlex';
import React, {FC} from 'react'
import styled from 'styled-components'

interface Props {
    userRole:any;
    authType:any;
  };

export const AuthText:FC<Props> = ({ userRole, authType }) => {
  return (
    <Container>
      <h1>{`${userRole} Auth`}</h1>
      <p>{authType}</p>
    </Container>
  )
}

export default AuthText


const Container = styled.div`
      ${boxProperty('100%', '100%', '', '0px', 'inherit')};
      ${displayFlex('space-between', 'center','column nowrap')};

      h1 {
        ${boxProperty('100%', '50%', '', '0px')};
        ${displayFlex('center', 'center')};
        color: abstracts.$black;
        font-size: 1.5rem;
        font-weight: 600;
        background: #333333;
        color: white;
      }

      p {
          font-size:1.2rem;
        font-weight: 600;
        }
    }
`;
