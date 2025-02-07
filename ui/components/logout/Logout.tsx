'use client';

import React from 'react'
import { signOut } from 'next-auth/react';
import styled from 'styled-components';
import {LogoutSharp} from '@mui/icons-material';
import boxProperty from '@/lib/utilities/boxProperty';
import displayFlex from '@/lib/utilities/displayFlex';

export default function Logout() {
  return (
    <Container>
      <button onClick={() => signOut()}>
        <LogoutSharp sx={{fontSize:'large'}} />
        Logout 
      </button>
    </Container>
  )
};

const Container = styled.div`
  ${boxProperty('50%','100%','','0px','inherit')};
  border-radius: 8px;

  button {
    width: 100%;
    // height:90%;
    ${displayFlex('flex-start','center','row nowrap')};
    gap: 10px;
    font-size:inherit;
    border-radius: 8px;
    cursor:pointer;
    border: none;
    color: white;
    background: inherit;
   };
`;
