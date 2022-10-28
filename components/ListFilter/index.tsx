import React from 'react';
import { ListFilterProps } from './types';

import * as S from './styles';

const ListFilter = ({ filterValue, onChangeFilter, theme }: ListFilterProps) => {
  return (
    <S.FilterContainer theme={theme}>
      <S.FilterOption theme={theme} selected={filterValue === 'All'} onPress={() => onChangeFilter('All')}>
        <S.FilterName theme={theme} selected={filterValue === 'All'}>
          All
        </S.FilterName>
      </S.FilterOption>
      <S.FilterOption theme={theme} selected={filterValue === 'College'} onPress={() => onChangeFilter('College')}>
        <S.FilterName theme={theme} selected={filterValue === 'College'}>
          College
        </S.FilterName>
      </S.FilterOption>
      <S.FilterOption theme={theme} selected={filterValue === 'Company'} onPress={() => onChangeFilter('Company')}>
        <S.FilterName theme={theme} selected={filterValue === 'Company'}>
          Company
        </S.FilterName>
      </S.FilterOption>
    </S.FilterContainer>
  )
}

export default ListFilter;