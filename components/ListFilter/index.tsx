import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import { HandleFilter } from '../../store/EventList/actions';
import { FilterTypes } from '../../store/EventList/types';

import * as S from './styles';

const ListFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: AppState) => state.list.filter);

  const handleChangeFilter = (newFilter: FilterTypes) => {
    dispatch<any>(HandleFilter(newFilter));
  }

  return (
    <S.FilterContainer>
      <S.FilterOption selected={filter === 'All'} onPress={() => handleChangeFilter('All')}>
        <S.FilterName selected={filter === 'All'}>
          All
        </S.FilterName>
      </S.FilterOption>
      <S.FilterOption selected={filter === 'College'} onPress={() => handleChangeFilter('College')}>
        <S.FilterName selected={filter === 'College'}>
          College
        </S.FilterName>
      </S.FilterOption>
      <S.FilterOption selected={filter === 'Company'} onPress={() => handleChangeFilter('Company')}>
        <S.FilterName selected={filter === 'Company'}>
          Company
        </S.FilterName>
      </S.FilterOption>
    </S.FilterContainer>
  )
}

export default ListFilter;