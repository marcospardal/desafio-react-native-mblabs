import React from 'react';
import EventCard from '../EventCard';
import { Dimensions } from 'react-native';
import Event from '../../types/event';
import Carousel from 'react-native-reanimated-carousel';

import * as S from './styles';
import { TopEventCarouselProps } from './types';

/**
 * 
 * @author Marcos Pardal
 * @param events List of top events
 */
const TopEventCarousel = ({ events }: TopEventCarouselProps) => {
  const width = Dimensions.get('window').width - 30;

  return (
    <S.CarouselContainer>
      <S.Title>Top Events</S.Title>
      <Carousel
        autoPlay={false}
        height={150}
        width={width}
        data={events}
        renderItem={(event: any) => <EventCard event={event}/>}
      />
    </S.CarouselContainer>
  )
}

export default TopEventCarousel;