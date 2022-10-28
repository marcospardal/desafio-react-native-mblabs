import React from 'react';
import EventCard from '../EventCard';
import { Dimensions } from 'react-native';
import { TopEventCarrouselProps } from './types';
import Carousel from 'react-native-reanimated-carousel';

import * as S from './styles';

/**
 * 
 * @author Marcos Pardal
 * @param events List of top events
 */
const TopEventCarousel = ({ events }: TopEventCarrouselProps) => {
  const width = Dimensions.get('window').width - 30;
  return (
    <S.CarouselContainer>
      <S.Title>Top Events</S.Title>
      <Carousel 
        autoPlay={false}
        height={150}
        width={width}
        data={[1, 2, 3]}
        renderItem={({item, index}) => <EventCard/>}
      />
    </S.CarouselContainer>
  )
}

export default TopEventCarousel;