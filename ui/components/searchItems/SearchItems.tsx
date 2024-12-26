import React, { FC, useEffect, useRef } from 'react'
import styles from '../../styles/components/header/searchItems.module.scss'
import SearchIcon from '@mui/icons-material/Search';

interface SearchProps {
  isSearchIconOpen:boolean;
  setIsSearchIconOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchItems:FC<SearchProps> = ({isSearchIconOpen, setIsSearchIconOpen}) => {
  const searchRef = useRef<any>(null);
  useEffect(() => {
    const handleSearchClick = () => {
        setIsSearchIconOpen((prev) => !prev);
        console.log(`header search icon is clicked ${isSearchIconOpen}`);
        
      };

    searchRef.current?.addEventListener('click',handleSearchClick);

    return () => {
      searchRef.current?.removeEventListener('click',handleSearchClick)
    };
      
    },[setIsSearchIconOpen,isSearchIconOpen]);


  return (
    <div className={styles.searchItems}>
      <form className={styles.form} id='searchItemsForm'>
        <input 
          type='text' 
          placeholder='Search products of any brand' 
          className={styles.input}
          /> 

        <button
          className={styles.button}
        >
          <SearchIcon
            className={styles.icon}
            sx={{
              fontSize:12,
              color:'white',
              background:'#333333'
              }}
          />
        </button>
      </form>
    </div>
  )
};

export default SearchItems
