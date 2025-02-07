'use client';

import React from 'react'
import { signOut } from 'firebase/auth';
import styled from 'styled-components';
import { LogoutSharp } from '@mui/icons-material';
import boxProperty from '@/lib/utilities/boxProperty';
import displayFlex from '@/lib/utilities/displayFlex';
import { auth } from "@/lib/helpers/firebaseConfig";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter();
  const { setUser, setRole } = useAuth(); // Update context state

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setRole(null);
      console.log("User signed out successfully.");
      router.push("/auth/signin/email");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <Button onClick={handleSignOut}>
      <LogoutSharp sx={{ fontSize: 'large' }} />
      Logout
    </Button>
  )
};

const Button = styled.button`
    width: 100%;
    // height:90%;
    ${displayFlex('flex-start', 'center', 'row nowrap')};
    gap: 10px;
    font-size:inherit;
    border-radius: 8px;
    cursor:pointer;
    border: none;
    color: white;
    background: inherit;
   };
`;

