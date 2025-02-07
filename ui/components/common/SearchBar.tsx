import React, { FC } from 'react'

interface Props {
  placeholder: string;
  onChange: (value: any) => void;
};

const SearchBar: FC<Props> = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      width={'100%'}
      height={'100%'}
    />
  )
};

export default SearchBar;

