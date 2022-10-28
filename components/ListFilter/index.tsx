import React from 'react';
import { ListFilterProps } from './types';

import * as S from './styles';

const ListFilter = ({ filterValue, onChangeFilter }: ListFilterProps) => {
  return (
    <S.FilterContainer>
      <S.FilterOption selected={filterValue === 'All'} onPress={() => onChangeFilter('All')}>
        <S.FilterName selected={filterValue === 'All'}>
          All
        </S.FilterName>
      </S.FilterOption>
      <S.FilterOption selected={filterValue === 'College'} onPress={() => onChangeFilter('College')}>
        <S.FilterName selected={filterValue === 'College'}>
          College
        </S.FilterName>
      </S.FilterOption>
      <S.FilterOption selected={filterValue === 'Company'} onPress={() => onChangeFilter('Company')}>
        <S.FilterName selected={filterValue === 'Company'}>
          Company
        </S.FilterName>
      </S.FilterOption>
    </S.FilterContainer>
  )
}

export default ListFilter;