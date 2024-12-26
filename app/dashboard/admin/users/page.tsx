"use client";
import styles from "./users.module.scss";
import React, { useState, useEffect, ChangeEvent } from 'react';
// import  Pagination  from "@/app/auth/dashboard/pagination/pagination";
import  getUsers  from '@/helpers/getUsers';
import  IUser  from '@/ui/interface/IUser';
import Linker from '@/ui/components/linker/Linker';
import SearchBar from '@/ui/components/searchBar/SearchBar';
import UserspageContent from '@/ui/content/userspageContent/UserpageContent';
import DashboardNavigationInterface from '@/ui/interface/DashboardNavigationInterface'
import DashboardNavigation from '@/ui/components/dashboardNavigation/DashboardNavigation';
import AdminMobileMenu from '@/ui/components/dashboardMobileMenu/admin/AdminMobileMenu';

const UsersPage = ({params}:any) => {

  const {id} = params;

const [users, setUsers] = useState<IUser[] | undefined>(undefined);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<any>('');


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsers();

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

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const query = e.target.value.toLowerCase();
    const filtered = users?.filter(user =>
      user.name.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.controlBar}>
      <DashboardNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
        <AdminMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </DashboardNavigation>

        <div className={styles.searchbarWrapper}>
          <SearchBar placeholder='Search users...' onChange={handleSearch} />
        </div>

        <div className={styles.adduserWrapper}>
          <Linker href='/auth/dashboard/admin/users/adduser'>
            Add User
          </Linker>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <UserspageContent filteredUsers={filteredUsers} />
      </div>
    </div>
  );
};
export default UsersPage;

