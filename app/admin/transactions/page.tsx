"use client";
import AdminMobileController from '@/ui/components/dashboardMobileController/admin/AdminMobileController';
import React, { useState, useEffect, ChangeEvent } from 'react';
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation';
// import Pagination from "@/app/auth/dashboard/pagination/pagination";
import IUser from '@/types/IUser';
import styles from "./transactions.module.scss";
import TransactionsContent from '@/ui/components/content/transactionsContent/TransactionsContent';
import DashboardNavigationInterface from '@/types/DashboardNavigationInterface'
import Search from '@/ui/components/search/Search';
import SearchBar from '@/ui/components/common/SearchBar';
// import getUsers from '@/lib/helpers/getUsers';
import getData from '@/lib/helpers/getData';
// import getUserByUsername from '@/libs/getUserByUsername';

const Transaction: React.FC<DashboardNavigationInterface> = ({ searchParams }) => {
  const q = searchParams?.q || ""
  const [users, setUsers] = useState<IUser[] | any>(undefined);
  const [filteredUsers, setFilteredUsers] = useState<IUser[] | any>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<any>('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getData('users');

        setUsers(fetchedUsers);
        setFilteredUsers(fetchedUsers);
        console.log(users)
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Error fetching users');
      }
    };

    fetchUsers();
  }, []);
  console.log(filteredUsers)
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const query = e.target.value.toLowerCase();
    const filtered = users.filter((user:any) =>
      user.name.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
  };

  if (error) {
    return <p>{error}</p>;
  }

  <Search setFilteredUsers={setFilteredUsers} onChange={handleSearch} />
  return (
    <div className={styles.container}>
      <div className={styles.controlBar}>
        <div className={styles.dbNavigationWrapper}>
          <DashboardNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>

            <AdminMobileController />
          </DashboardNavigation>
        </div>

        <div className={styles.searchbarWrapper}>
          <SearchBar placeholder='Search users...' onChange={handleSearch} />
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <TransactionsContent filteredUsers={filteredUsers} />
      </div>
    </div>
  );
};
export default Transaction;

