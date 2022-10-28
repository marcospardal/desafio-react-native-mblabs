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
 * @param theme device theme 
 */
const TopEventCarousel = ({ events, theme }: TopEventCarrouselProps) => {
  const width = Dimensions.get('window').width - 30;
  return (
    <S.CarouselContainer>
      <S.Title theme={theme}>Top Events</S.Title>
      <Carousel 
        autoPlay={false}
        height={150}
        width={width}
        data={[1, 2, 3]}
        renderItem={({item, index}) => <EventCard theme={theme}/>}
      />
    </S.CarouselContainer>
  )
}

export default TopEventCarousel;