import React, { useState } from 'react';
import { EventListProps } from './types';
import ListFilter from '../ListFilter';
import EventCard from '../EventCard';

import * as S from './styles';

type FilterTypes = 'All' | 'College' | 'Company'

const EventList = ({ theme }: EventListProps) => {
  const [filterVisible, setFilterVisible] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<FilterTypes>('All');

  return (
    <S.EventList>
      <ListFilter filterValue={filterValue} onChangeFilter={setFilterValue} theme={theme} />
      <S.List 
        data={['1', '2', '3', '4', '5', '6', '7', '8']}
        renderItem={(item: string) => <EventCard theme={theme}/>}
        keyExtractor={(item: string) => item}
      />
    </S.EventList>
  )
};

export default EventList;