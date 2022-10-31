import React from 'react';
import { EventListProps } from './types';
import ListFilter from '../ListFilter';
import EventCard from '../EventCard';
import Event from '../../types/event';
import { useSelector } from 'react-redux';

import * as S from './styles';
import { AppState } from '../../store';

/**
 * 
 * @author Marcos Pardal
 */
const EventList = ({ type }: EventListProps) => {
  const list = useSelector((state: AppState) => type === 'All' ? state.list.data : state.list.myTickets);

  return (
    <S.EventList>
      {type === 'All' && <ListFilter />}
      <S.List 
        data={list}
        renderItem={(event: Event) => <EventCard event={event}/>}
        keyExtractor={(item: Event) => item.id}
      />
    </S.EventList>
  )
};

export default EventList;