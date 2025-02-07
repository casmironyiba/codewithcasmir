import React, { FC, useEffect, useState, useTransition } from 'react'
import styles from './userspageContent.module.scss'
import Link from 'next/link'
import { deleteUserAction } from '@/actions/deleteUser';
import getData from '@/lib/helpers/getData';
import updateData from '@/lib/helpers/updateData';
import IUser from '@/types/IUser';
import SeparatorLine from '../../common/SeparatorLine';

interface Props {
  filteredUsers: IUser[];
  setFilteredUsers: React.Dispatch<React.SetStateAction<IUser[]>>
};

const UserpageContent: FC<Props> = ({ filteredUsers, setFilteredUsers }) => {

  const [isPending, startTransition] = useTransition();
  console.log(filteredUsers)
  const handleDelete = async (userID: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      startTransition(async () => {
        const response = await deleteUserAction(userID);
        if (response.success) {
          alert(response.message);
          await updateData(setFilteredUsers)
        } else {
          alert(response.message);
        }
      });
    }
  };

  return (
    <table className={styles.container}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableRow}>
          <td>Name</td>
          <td>Username</td>
          <td>Email</td>
          <td>Create At</td>
          <td>Role</td>
          <td>Action</td>
        </tr>
      </thead>

      <tbody className={styles.tableBody}>
        {filteredUsers?.length > 0 ? (
          filteredUsers.map((user: any) => (
            <tr className={styles.tableRow} key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email.length > 10 ? user.email.substr(-12) : user.email}</td>
              <td>22-04-2024</td>
              <td>{user.role}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/admin/users/${user.id}`} className={`${styles.link} ${styles.viewLink}`}>
                    View
                  </Link>
                  <button
                  className={styles.deleteButton}
                    onClick={() => {
                      handleDelete(user.id)

                      console.log(user.id)
                    }}
                    disabled={isPending}
                  >
                    {isPending ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              </td>
            </tr>

          ))
        ) : (
          <p>No users found.</p>
        )}
      </tbody>
    </table>
  )
};

export default UserpageContent; 
