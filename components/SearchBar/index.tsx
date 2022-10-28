import React from 'react';
import { SearchBarProps } from './types';

import * as S from './styles';

/**
 * 
 * @author Marcos Pardal
 * @param onSearch function to handle search
 */
const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <>
      <S.Input placeholder="Search"/>
      <S.SearchIcon
        name="search"
        size={15}
        color={'black'}
      />
    </>
  )
};

export default SearchBar;