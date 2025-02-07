import getUserById from '@/lib/helpers/getUserById';
import React from 'react';
import styles from './updateUser.module.scss'
import AdminMobileController from '@/ui/components/dashboardMobileController/admin/AdminMobileController';
import UpdateUserForm from '@/ui/components/forms/updateUserForm/UpdateUserForm';
import getData from '@/lib/helpers/getData';
import IUser from '@/types/IUser';

export default async function UserPage({ params }:any) {

  const { id } = params;
  const users:any = await getData('users');
  const user = users.find((user:IUser) =>user.id ===id)
    //getUserById(users, id);
  console.log(user)
  if (!user) {
    return <p>User not found</p>;
  }

  console.log(user)
  return (
    <div className={styles.container}>
      <div className={styles.controlBar}>
        <AdminMobileController />
      </div>

      <div className={styles.contentWrapper}>
        <UpdateUserForm user={user} />
      </div>
    </div>
  );
}
