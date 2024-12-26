import React, { FC } from 'react'
import styles from "./dashboardNavigation.module.scss";
// import AdminMobileMenu from '@/ui/components/dashboardMobileMenu/AdminMobileMenu';
import { DashboardMenuButton } from '../DashboardMenuButton';
import DashboardNavigationInterface from '@/ui/interface/DashboardNavigationInterface'
import AdminPlainLinks from '../adminPlainLinks/AdminPlainLinks';

// <AdminMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

const AdminDashboardNavigation: FC<DashboardNavigationInterface> = ({ isMenuOpen, setIsMenuOpen, children }) => {

  // const [isMenuOpen, setIsMenuOpen] = useState<any>('');
  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <DashboardMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

      <div className={styles.mobilemenuWrapper}>
        {children}
      </div>
    </div>
  )
}

export default AdminDashboardNavigation;
