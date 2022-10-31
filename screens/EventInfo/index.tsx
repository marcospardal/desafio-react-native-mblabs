import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RootStackScreenProps } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { IconInfo, NumberControl } from '../../components';

import * as S from './styles';
import { AddItem } from '../../store/Cart/actions';

const EventInfo = ({ route }: RootStackScreenProps<'ModalEventInfo'>) => {
  const dispatch = useDispatch();
  const { event } = route.params;
  const navigation = useNavigation();
  const [ticketsNumber, setTicketsNumber] = useState<number>(0);

  const handleTicketsIncrease = () => setTicketsNumber(prev => prev + 1);

  const handleTicketsDecrease = () => setTicketsNumber(prev => prev - 1);

  const handleAddToCart = () => {
    const ticket = { event, number: ticketsNumber };
    dispatch<any>(AddItem(ticket));
    navigation.navigate('Root');
  }

  return (
    <S.Container>
      <S.EventImage source={{ uri: event.img }}/>
      <S.Content>
        <S.Title>{event.name}</S.Title>
        <S.Description>{event.description}</S.Description>
        <IconInfo icon={<S.Icon name='dollar-sign' />} info={event.ticketValue.toString()}/>
        <S.Row>
          <IconInfo 
            icon={<S.Icon name={event.organizerType === 'College' ? 'graduation-cap' : 'dollar-sign'} />} 
            info={event.organizer}
          />
          <IconInfo icon={<S.Icon name='at'/>} info={event.socialMedia ?? ''} noMargin={true}/>
        </S.Row>
        <S.Row>
          <IconInfo icon={<S.Icon name='calendar' />} info={event.date} />
          <IconInfo icon={<S.Icon name='clock' />} info={event.time} />
        </S.Row>
        <IconInfo 
          icon={<S.Icon name='map-marker-alt' />} 
          info={`${event.local}. ${event.street} - ${event.stNumber}, ${event.neighborhood}, ${event.city}.`}
        />
      </S.Content>
      <S.BuyingOptions>
        <NumberControl value={ticketsNumber} handleDecrease={handleTicketsDecrease} handleIncrease={handleTicketsIncrease} />
        <S.AddCart onPress={handleAddToCart}>
          <S.CartLabel>Add to cart</S.CartLabel>
        </S.AddCart>
      </S.BuyingOptions>
    </S.Container>
  )
}

export default EventInfo;