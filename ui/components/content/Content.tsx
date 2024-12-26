import React, { FC } from 'react'
import styles from './content.module.scss';

interface Props {
  children: React.ReactNode;
};

const Content: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>{children}</div>
  )
};
export default Content;
