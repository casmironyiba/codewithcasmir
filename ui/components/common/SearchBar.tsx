import React, { FC } from 'react'

interface Props {
  placeholder?: string
  className?: string
  onChange?: (value: any) => void
}

const SearchBar: FC<Props> = ({ className, placeholder, onChange }) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  )
}

export default SearchBar
