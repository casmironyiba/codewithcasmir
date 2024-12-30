import getUserById from '@/actions/getUserById';
import React from 'react';
import styles from './user.module.scss'
import AdminMobileController from '@/ui/components/dashboardMobileController/admin/AdminMobileController';
import UserpageContent from '@/ui/content/userpageContent/UserpageContent';

export default async function UserPage({ params }: any) {

  const { id } = params;

  const user = await getUserById(id);
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
        <UserpageContent user={user} />
      </div>
    </div>
  );
}
