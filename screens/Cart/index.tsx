import React from 'react';
import { AppState } from '../../store';
import Ticket from '../../types/ticket';
import { useSelector, useDispatch } from 'react-redux';
import { Ticket as TicketItem } from '../../components';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import { HandleFinish } from '../../store/Cart/actions';
import { AddTicketEvent } from '../../store/EventList/actions';

const Cart = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cart = useSelector((state: AppState) => state.cart);

  const handleFinish = () => {
    dispatch<any>(HandleFinish());
    cart.items.map(item => dispatch<any>(AddTicketEvent(item.event)))
    navigation.navigate('Root');
  }

 return (
  <S.Container>
    <S.List
      data={cart.items}
      renderItem={({ item }: { item: Ticket }) => <TicketItem item={item} />}
      keyExtractor={(item: Ticket) => item.event.id}
    />
    <S.Finish disabled={!cart.items.length} onPress={handleFinish}>
      <S.FinishLabel>
        Finish ${cart.total}
      </S.FinishLabel>
    </S.Finish>
  </S.Container>
 )
};

export default Cart;