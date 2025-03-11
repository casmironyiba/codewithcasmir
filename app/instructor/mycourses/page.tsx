"use client"
import React, { FC, useState } from 'react'
import styles from "./myCourses.module.scss";
import DashboardNavigationInterface from '@/types/IDashboardNavigation'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation';
import MobileMenu from '@/ui/components/dashboardMobileMenu/MobileMenu';
import InstructorPlainLinks from '@/ui/components/links/dashboard/instructorPlainLinks/InstructorPlainLinks';

const MyCourses: FC<DashboardNavigationInterface> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        my Courses
      </div>
    </div>
  )
}
export default MyCourses;
