import React from 'react';
import { EventCardProps } from './types';
import { FontAwesome5 } from '@expo/vector-icons';

import * as S from './styles';

/**
 * 
 * @author Marcos Pardal
 */
const EventCard = ({ theme, event }: EventCardProps) => {
  return (
    <S.Card theme={theme} activeOpacity={0.8}>
      <S.EventImage source={{ uri: "https://images.unsplash.com/photo-1526045612212-70caf35c14df"}}/>
      <S.CardInfo>
        <S.Row>
          <S.CardTitle theme={theme}>Event Name</S.CardTitle>
          <S.Icon theme={theme} name='graduation-cap'/>
        </S.Row>
        <S.EventInfo theme={theme}>Event Organizer</S.EventInfo>
        <S.EventTicketPrice theme={theme}>$ 30</S.EventTicketPrice>
        <S.EventInfo theme={theme}>Street name - number, neighborhod, city</S.EventInfo>
      </S.CardInfo>
    </S.Card>
  )
}

export default EventCard;