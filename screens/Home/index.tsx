import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TopEventCarousel, EventList } from '../../components';
import { AppState } from '../../store';
import { LoadEvents } from '../../store/EventList/actions';

import * as S from './styles'

const HomeScreen = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: AppState) => state.list.filter);
  const search = useSelector((state: AppState) => state.list.search);
  const topEvents = useSelector((state: AppState) => state.list.data).slice(0, 2);

  
  useEffect(() => {
    dispatch<any>(LoadEvents())
  }, [filter, search])

  return (
    <S.Container full={search === ''}>
      {search === '' && <TopEventCarousel events={topEvents} />}
      <EventList type='All'/>
    </S.Container>
  )
}

export default HomeScreen;