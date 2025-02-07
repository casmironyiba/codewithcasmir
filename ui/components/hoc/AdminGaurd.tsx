"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from "@/context/AuthContext";

const AdminGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const { user, role, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/auth/signin/email')
      } else if (role !== 'admin') {
        router.push("/unauthorized");
      }
    }

  }, [user, role, loading, router]);

  if (loading) return <p>Loading...</p>;

  if (!isAdmin) return null; // Optionally render nothing while redirecting

  return <>{children}</>;
};

export default AdminGuard;
