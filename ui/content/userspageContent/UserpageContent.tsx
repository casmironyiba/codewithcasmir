import React, { FC } from 'react'
import styles from './userspageContent.module.scss'
import Link from 'next/link'

interface Props {
  filteredUsers: any[]
};

const UserpageContent: FC<Props> = ({ filteredUsers }) => {

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
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <tr className={styles.tableRow} key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email.length > 10 ? user.email.substr(-12) : user.email}</td>
              <td>22-04-2024</td>
              <td>{user.role}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/auth/dashboard/admin/users/${user._id}`} className={`${styles.link} ${styles.viewLink}`}>
                    <button className={`${styles.button} ${styles.viewButton}`}>View</button>
                  </Link>
                  <Link href={`/auth/dashboard/admin/users/${user._id}`} className={`${styles.link} ${styles.deleteLink}`}>
                    <button className={`${styles.button} ${styles.deleteButton}`}>Delete</button>
                  </Link>
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
