import { useAuth } from '@/context/AuthContext'

const UserProfile = () => {
  const { user } = useAuth()

  if (!user) return <p>Loading...</p> // Prevents crashes

  return (
    <img
      src={user.profilePicture || '/default-avatar.png'}
      alt='User Profile'
    />
  )
}
