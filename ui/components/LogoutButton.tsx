'use client'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/helpers/firebaseConfig'

interface Props {
  width?: string
  height?: string
  background?: string
  color?: string
  padding?: string
  borderRadius?: string
}

const LogoutButton: FC<Props> = ({
  width = '100px',
  height = '40px',
  background = '#ff4d4d',
  color = '#fff',
  padding = '10px',
  borderRadius = '5px',
}) => {
  const router = useRouter()
  const handleLogout = async () => {
    try {
      await signOut(auth)
      router.push('/auth/signin/email')
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }
  return (
    <button
      onClick={handleLogout}
      style={{
        width,
        height,
        padding,
        background,
        color,
        border: 'none',
        borderRadius,
        outline: 'none',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
      }}
    >
      Logout
    </button>
  )
}
export default LogoutButton
