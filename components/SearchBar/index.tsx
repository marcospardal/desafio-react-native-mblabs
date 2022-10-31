import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HandleSearch } from '../../store/EventList/actions';

import * as S from './styles';

/**
 * 
 * @author Marcos Pardal
 * @param onSearch function to handle search
 */
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch<any>(HandleSearch(searchValue));
  }
  
  return (
    <>
      <S.Input 
        placeholder="Search" 
        value={searchValue} 
        onChangeText={setSearchValue}
        onSubmitEditing={handleSearch}
      />
      <S.SearchIcon
        name="search"
        size={15}
        color={'black'}
        onPress={handleSearch}
      />
    </>
  )
};

export default SearchBar;