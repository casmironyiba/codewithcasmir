import React, {FC} from 'react'
import styles from './sidebar.module.scss';

interface Prop {
  children:React.ReactNode;
};

const DashboardAside:FC<Prop> =  ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
};
export default DashboardAside;
