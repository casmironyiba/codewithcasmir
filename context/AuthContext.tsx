'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { useRouter, usePathname } from 'next/navigation'
import { auth, db } from '@/lib/helpers/firebaseConfig'
import { doc, getDoc, updateDoc } from 'firebase/firestore'

interface AuthContextType {
  user: User | null | any
  isVerified: boolean
  role: string | null | any
  loading: boolean
  profilePicture: string | any
  setProfilePicture: React.Dispatch<React.SetStateAction<string | null>>
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  setRole: React.Dispatch<React.SetStateAction<string | null>>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [profilePicture, setProfilePicture] = useState<string | null>(null)
  const [role, setRole] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [isVerified, setIsVerified] = useState<boolean>(false)

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser)
      console.log(currentUser)

      if (currentUser) {
        const token = await currentUser.getIdToken(true)
        document.cookie = `token=${token}; path=/`

        // Fetch role from Firestore
        const userDocRef = doc(db, 'users', currentUser.uid)
        const userDoc = await getDoc(userDocRef)
        const userData = userDoc.data()
        setRole(userData?.role || null)
        setProfilePicture(userData?.profilePicture || null)

        if (userDoc.exists()) {
          const userData = userDoc.data()
          setIsVerified(userData.isVerified || false)

          if (currentUser.emailVerified && !userData.isVerified) {
            await updateDoc(userDocRef, { isVerified: true })
            setIsVerified(true) // Update state
            console.log('User verification status updated in Firestore')
          }
        }

        if (
          pathname === '/auth/signin/email' ||
          pathname === '/auth/signup/email'
        ) {
          if (userData?.role === 'admin' && isVerified) {
            router.push('/admin/dashboard')
          } else if (userData?.role === 'instructor') {
            router.push('/instructor/dashboard')
          } else if (userData?.role === 'student') {
            console.log('email not ')
            router.push('/student/dashboard')
          }
        }
      } else {
        document.cookie =
          'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;'
        setRole(null)
        setProfilePicture(null)
      }

      setLoading(false)
    })

    return () => unsubscribe()
  }, [router])

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isVerified,
        profilePicture,
        setProfilePicture,
        loading,
        setUser,
        setRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
