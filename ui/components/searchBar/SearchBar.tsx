import React, { FC } from 'react'
import styles from './searchBar.module.scss';

interface Props {
  placeholder: string;
  onChange: (value:any) => void;
};

const SearchBar: FC<Props> = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={styles.input}
      onChange={onChange}
    />
  )
};

export default SearchBar;

