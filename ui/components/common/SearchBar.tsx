import boxProperty from '@/lib/utilities/boxProperty'
import displayFlex from '@/lib/utilities/displayFlex'
import Themes from '@/lib/utilities/themes'
import { Book, BookSharp, Search } from '@mui/icons-material'
import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  placeholder?: string
  className?: string
  onChange?: (value: any) => void
}

const SearchBar: FC<Props> = ({ className, placeholder, onChange }) => {
  return (
    <Container>
      <Search className={'icon'} sx={{ fontSize: 25 }} />
      <input
        type='text'
        placeholder={placeholder}
        onChange={onChange}
        className={className}
      />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2px;
  // ${displayFlex('space-around', 'center', 'row nowrap')};
  background: ${Themes.$dark};
  border: 2px solid ${Themes.$palevioletred};
  border-radius: 10px;
  gap: 10px;
  padding: 1px;

  .icon {
    width: 15%;
  }

  input {
    hieght: 100%;
    ${boxProperty('85%', '100%', '', '', Themes.$dark)};
    color: ${Themes.$light};
    border: none;
    outline: none;
    border-radius:5px;
  }
`
export default SearchBar
