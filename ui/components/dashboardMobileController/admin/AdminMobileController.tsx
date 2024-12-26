'use client'
import React, { useState } from 'react'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation';
import AdminMobileMenu from '@/ui/components/dashboardMobileMenu/admin/AdminMobileMenu';

export default function AdminMobileController() {
  const [isMenuOpen, setIsMenuOpen] = useState<any>('');

  return (
    <div>
      <DashboardNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
        <AdminMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </DashboardNavigation>
    </div>
  )
}
