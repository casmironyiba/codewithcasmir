import React, { FC } from 'react'
import styles from './transactionsContent.module.scss'
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
          <td>Status</td>
          <td>Date</td>
          <td>Amount</td>
          <td>Course</td>
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
