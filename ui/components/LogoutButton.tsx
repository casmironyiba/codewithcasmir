'use client'
import { useRouter } from "next/navigation"
import { FC } from "react"
import { signOut } from "firebase/auth"
import { auth } from '@/lib/helpers/firebaseConfig'

const LogoutButton: FC = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await signOut(auth)
      router.push('/auth/signin/email')

    } catch (error) {
      console.error("Error logging out:", error);
    }
  }
  return (
    <button onClick={handleLogout} style={{ padding: "10px", background: "red", color: "white" }}>
      Logout
    </button>
  );
}
export default LogoutButton
