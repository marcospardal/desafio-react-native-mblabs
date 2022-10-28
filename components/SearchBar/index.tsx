import React from 'react';
import { SearchBarProps } from './types';

import * as S from './styles';

/**
 * 
 * @author Marcos Pardal
 * @param onSearch function to handle search
 * @param theme device theme 
 */
const SearchBar = ({ onSearch, theme }: SearchBarProps) => {
  return (
    <>
      <S.Input theme={theme} placeholder="Search"/>
      <S.SearchIcon
        name="search"
        size={15}
        color={'black'}
      />
    </>
  )
};

export default SearchBar;