"use client"
import React, { startTransition, useEffect, useState, useTransition } from 'react';
import IUser from '@/types/IUser';
import styles from './updateUserForm.module.scss'
import Image from 'next/image'
import Input from '../../common/Input';
import Label from '../../common/Label';
import { updateRole } from '@/actions/updateRole';
import { UserIcon } from '../../common/UserIcon';

interface UserProps {
  user: IUser;
}

const UserCard: React.FC<UserProps> = ({ user }) => {
  const [state, setState] = useState<IUser>(user)
  const [role, setRole] = useState<any>(user.role)
  const [message, setMessage] = useState<string>('')
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating role:", role);
    startTransition(async () => {
      const result = await updateRole({ email: state.email, role });
      setMessage(result.message)
    })
  }


  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h1 className={styles.text}>Update User Credentials</h1>
      </div>
      <form onSubmit={handleSubmit} className={styles.userWrapper}>
        {message && <p className="text-sm text-gray-600">{message}</p>}

        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image src='/images/image4.jpg' width={100} height={100} alt='user image' />
            <UserIcon sx={{fontSize:'10px'}}/>
          </div>
        </div>

        <div className={styles.credentialsWrapper}>
          <div className={`${styles.inputWrapper} ${styles.nameWrapper}`}>
            <Label name='name' text={'Name:'} className={styles.nameLabel} />
            <Input
              type='text'
              className={styles.name}
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}

            />
          </div>

          <div className={`${styles.inputWrapper} ${styles.usernameWrapper}`}>
            <Label name='username' text={'Username:'} className={styles.usernameLabel} />
            <Input
              type='text'
              className={styles.username}
              value={user?.username}
              onChange={(e) => setState({ ...state, username: e.target.value })}
            />
          </div>

          <div className={`${styles.inputWrapper} ${styles.emailWrapper}`}>
            <Label name='email' text={'Email:'} className={styles.emailLabel} />
            <Input
              type='email'
              className={styles.email}
              value={user?.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </div>

          <div className={`${styles.inputWrapper} ${styles.createdAtWrapper}`}>
            <Label name='email' text={'CreatedAt:'} className={styles.emailLabel} />
            <p className={styles.email}>
            </p>
          </div>

          <div className={`${styles.inputWrapper} ${styles.roleWrapper}`}>
            <Label name='role' text={'Select Role:'} className={styles.roleLabel} />
            <select
              className={styles.username}
              value={role}
              onChange={(e) => {
                setRole(e.target.value)
                console.log(role)
              }}
            >
              <option value="" disabled>Select Role</option>
              <option value='admin'>Admin</option>
              <option value='instructor' >Instructor</option>
              <option value='student' >User</option>

            </select>
          </div>

          <div className={styles.updateButtonWrapper}>
            <button type='submit' disabled={isPending} >
              {isPending ? "Updating..." : "Update Role"}
            </button>
          </div>

        </div>
      </form >
    </div >
  );
};

export default UserCard;
