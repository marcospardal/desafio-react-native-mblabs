import React from 'react';
import EventCard from '../EventCard';
import { Dimensions } from 'react-native';
import Event from '../../types/event';
import Carousel from 'react-native-reanimated-carousel';

import * as S from './styles';
import { AppState } from '../../store';
import { useSelector } from 'react-redux';

/**
 * 
 * @author Marcos Pardal
 * @param events List of top events
 */
const TopEventCarousel = () => {
  const width = Dimensions.get('window').width - 30;
  const list = useSelector((state: AppState) => state.list.data);
  const topEvents = list.slice(0, 3);

  return (
    <S.CarouselContainer>
      <S.Title>Top Events</S.Title>
      <Carousel
        autoPlay={false}
        height={150}
        width={width}
        data={topEvents}
        renderItem={(event: any) => <EventCard event={event}/>}
      />
    </S.CarouselContainer>
  )
}

export default TopEventCarousel;