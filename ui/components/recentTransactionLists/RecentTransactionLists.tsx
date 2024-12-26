import React, { useEffect, useState } from 'react'
import styles from './recentTransactionLists.module.scss'
import TransactionsContent from '@/ui/content/transactionsContent/TransactionsContent'
import  getUsersFromDB  from '@/libs/getUsersFromDB';

export default function RecentTransactionLists({searchParams}:any) {
  const q = searchParams?.q || "" 
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState<string>('');


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsersFromDB();

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
  return (
    <div className={styles.container}>
      <TransactionsContent filteredUsers={filteredUsers} />

    </div>
  )
};

