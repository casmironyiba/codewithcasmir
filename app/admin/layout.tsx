'use client'
import React, { FC, useRef, useState, useEffect } from 'react'
import styles from './layout.module.scss'
import Main from '@/ui/components/layout/Main'
import NewUpdate from '@/ui/components/newUpdate/NewUpdate'
import AdminLinks from '@/ui/components/links/dashboard/adminLinks/AdminLinks'
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface Props {
  children: React.ReactNode
}
const Layout: FC<Props> = ({ children }) => {
  const menuRef = useRef<any>(null)
  const [isMenuOpen, setIsMenuOpen] = useState<any>('')
  const { user, role, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/auth/signin/email");
      } else if (role !== "admin") {
        // router.push("/unauthorized");
      }
    }
  }, [user, role, loading, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  // if (user && role === "admin") {
  return (
    <Main>
      <div className={styles.mainContainer}>
        <div className={styles.adminDashboardWrapper}>
          <AdminLinks />
        </div>

        <div className={styles.content}>
          <div className={styles.childrenWrapper}>{children}</div>

          <div className={styles.newupdateWrapper}>
            <NewUpdate />
          </div>
        </div>
      </div>
    </Main>
  )
}

// return null;
// }

export default Layout

