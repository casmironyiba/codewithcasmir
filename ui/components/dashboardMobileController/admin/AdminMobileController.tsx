'use client'
import React, { useState } from 'react'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation'
import MobileMenu from '../../dashboardMobileMenu/MobileMenu'

export default function AdminMobileController() {
  const [isMenuOpen, setIsMenuOpen] = useState<any>('')

  return (
    <div>
      <DashboardNavigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      >
        <MobileMenu
          adminLinks
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </DashboardNavigation>
    </div>
  )
}
