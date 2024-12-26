
"use client";
import React, { useState, useEffect, ChangeEvent, FC } from 'react';
import SearchBar from '../searchBar/SearchBar';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface Props {
  setFilteredUsers:React.SetStateAction<any>;
  onChange:any;
};

const Search: FC<Props> = ({setFilteredUsers}) => {
  const searchParams = useSearchParams();
  const pathName = usePathname()
  const { replace } = useRouter()
  const [user,setuser] = useState('')

  const handleSearch = (event: any) => {
    const params = new URLSearchParams(searchParams)

    if (event.target.value) {
      params.set('q', event?.target.value)
    } else {
      params.delete('q')
    }

    replace(`${pathName}?${params}`);
    setFilteredUsers(event.target.value)

  }

  // useEffect(() => {
  //
  // }, [])
  return (
    <div>
      <SearchBar placeholder='Search ...' onChange={handleSearch} />

    </div>
  )
}

export default Search
