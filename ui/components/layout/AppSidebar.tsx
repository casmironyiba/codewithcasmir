"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/ui/components/layout/sidebar";
import {
  BookOpen,
  Briefcase,
  DollarSign,
  LogOut,
  PanelLeft,
  Settings,
  User,
} from "lucide-react";
import Loading from "../Loading";
import Image from "next/image";
import Link from "next/link";
import styles from "./appSidebar.module.scss"; // Import SCSS Module

const AppSidebar = () => {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  const navLinks = {
    student: [
      { icon: BookOpen, label: "Courses", href: "/user/courses" },
      { icon: Briefcase, label: "Billing", href: "/user/billing" },
      { icon: User, label: "Profile", href: "/user/profile" },
      { icon: Settings, label: "Settings", href: "/user/settings" },
    ],
    teacher: [
      { icon: BookOpen, label: "Courses", href: "/teacher/courses" },
      { icon: DollarSign, label: "Billing", href: "/teacher/billing" },
      { icon: User, label: "Profile", href: "/teacher/profile" },
      { icon: Settings, label: "Settings", href: "/teacher/settings" },
    ],
  };

  if (!isLoaded) return <Loading />;
  if (!user) return <div>User not found</div>;

  const userType =
    (user.publicMetadata.userType as "student" | "teacher") || "student";
  const currentNavLinks = navLinks[userType];

  return (
    <Sidebar collapsible="icon" style={{ height: "100vh" }} className={styles.appSidebar}>
      <SidebarHeader>
        <SidebarMenu className={styles.appSidebar__menu}>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" onClick={toggleSidebar} className={styles.appSidebar__logoContainer}>
              <div className={styles.appSidebar__logoWrapper}>
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={25}
                  height={20}
                  className={styles.appSidebar__logo}
                />
                <p className={styles.appSidebar__title}>EDROH</p>
              </div>
              <PanelLeft className={styles.appSidebar__collapseIcon} />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className={styles.appSidebar__navMenu}>
          {currentNavLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <SidebarMenuItem key={link.href} className={`${styles.appSidebar__navItem} ${isActive ? styles.active : ""}`}>
                <SidebarMenuButton asChild size="lg" className={styles.appSidebar__navButton}>
                  <Link href={link.href} className={styles.appSidebar__navLink} scroll={false}>
                    <link.icon className={isActive ? "text-white-50" : "text-gray-500"} />
                    <span className={isActive ? "text-white-50" : "text-gray-500"}>
                      {link.label}
                    </span>
                  </Link>
                </SidebarMenuButton>
                {isActive && <div className={styles.appSidebar__activeIndicator} />}
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <button onClick={() => signOut()} className={styles.appSidebar__signout}>
                <LogOut className="mr-2 h-6 w-6" />
                <span>Sign out</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
