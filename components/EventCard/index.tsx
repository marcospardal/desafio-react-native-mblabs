import React from 'react';
import { EventCardProps } from './types';

import * as S from './styles';

/**
 * 
 * @author Marcos Pardal
 */
const EventCard = ({ event }: EventCardProps) => {
  return (
    <S.Card activeOpacity={0.8}>
      <S.EventImage source={{ uri: "https://images.unsplash.com/photo-1526045612212-70caf35c14df"}}/>
      <S.CardInfo>
        <S.Row>
          <S.CardTitle>Event Name</S.CardTitle>
          <S.Icon name='graduation-cap'/>
        </S.Row>
        <S.EventOrganizer>Event Organizer</S.EventOrganizer>
        <S.EventInfo>20/10/2022 18:40</S.EventInfo>
        <S.EventTicketPrice>$ 30</S.EventTicketPrice>
        <S.EventInfo>Street name - number, neighborhod, city</S.EventInfo>
      </S.CardInfo>
    </S.Card>
  )
}

export default EventCard;