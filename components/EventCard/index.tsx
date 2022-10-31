import React from 'react';
import { EventCardProps } from './types';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

/**
 * 
 * @author Marcos Pardal
 */
const EventCard = ({ event, onlyInfo = false }: EventCardProps) => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('ModalEventInfo', { event: event.item, onlyInfo });
  }

  return (
    <S.Card onLongPress={handleClick}>
      <S.EventImage source={{ uri: event.item.img}}/>
      <S.CardInfo>
        <S.Row>
          <S.CardTitle>{event.item.name}</S.CardTitle>
          <S.Icon name={event.item.organizerType === 'College' ? 'graduation-cap' : 'dollar-sign'}/>
        </S.Row>
        <S.EventOrganizer>{event.item.organizer}</S.EventOrganizer>
        <S.EventInfo>{event.item.date} {event.item.time}</S.EventInfo>
        <S.EventTicketPrice>$ {event.item.ticketValue}</S.EventTicketPrice>
        <S.EventInfo>{event.item.street} - {event.item.stNumber}, {event.item.neighborhood}, {event.item.city}</S.EventInfo>
      </S.CardInfo>
    </S.Card>
  )
}

export default EventCard;