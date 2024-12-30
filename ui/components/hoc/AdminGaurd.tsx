"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '@/firebaseConfig'; // Firestore instance

const AdminGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingRole, setCheckingRole] = useState(true);

  useEffect(() => {
    const checkAdminRole = async () => {
      if (!loading && user) {
        try {
          // Fetch user's role from Firestore
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists() && userDoc.data().role === "admin") {
            setIsAdmin(true);
          } else {
            router.replace("/unauthorized"); // Redirect if not admin
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
          router.replace("/unauthorized");
        } finally {
          setCheckingRole(false);
        }
      } else if (!loading && !user) {
        router.replace("/login"); // Redirect if not logged in
      }
    };

    checkAdminRole();
  }, [user, loading, router]);

  if (loading || checkingRole) return <p>Loading...</p>;

  if (!isAdmin) return null; // Optionally render nothing while redirecting

  return <>{children}</>;
};

export default AdminGuard;
