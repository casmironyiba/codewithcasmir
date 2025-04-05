'use client'

import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '@/lib/helpers/firebaseConfig'
import styled from 'styled-components'
import Themes from '@/lib/utilities/themes'
import GoogleIcon from '@mui/icons-material/Google'
import displayFlex from '@/lib/utilities/displayFlex'

export default function GoogleLogin() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      console.log('User:', result.user)
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <GoogleButton onClick={handleGoogleLogin}>
      <GoogleIcon sx={{color:'red', fontSize:'1rem'}} />
      Sign in with Google
    </GoogleButton>
  )
}

const GoogleButton = styled.button`
  padding: 8px 8px;
  background-color: inherit;
  color: ${Themes.$authText};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  width: 100%;
  border: 1px solid ${Themes.$border};
  transition: background 0.3s ease;
  ${displayFlex('center','center')};
  gap:10px;

  &:hover {
    background-color: #1e40af; /* Darker blue on hover */
  }
`
