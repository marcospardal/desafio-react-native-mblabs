import React, { useCallback } from 'react';
import { TicketProps } from './types';
import { useDispatch } from 'react-redux';
import NumberControl from '../NumberControl';


import * as S from './styles';
import { HandleItemNumber, RemoveItem } from '../../store/Cart/actions';

const Ticket = ({ item }: TicketProps) => {
  const dispatch = useDispatch();

  const handleIncrease = useCallback(() => {
    dispatch<any>(HandleItemNumber({ ...item, number: item.number + 1 }));
  }, [dispatch, item.number])

  const handleDecrease = useCallback(() => {
    if (item.number === 1) dispatch<any>(RemoveItem(item));
    else dispatch<any>(HandleItemNumber({ ...item, number: item.number - 1 }));
  }, [dispatch, item.number])

  return (
    <S.Ticket>
      <S.Icon />
      <S.Content>
        <S.TicketEvent>{item.event.name}</S.TicketEvent>
        <NumberControl cart value={item.number} handleDecrease={handleDecrease} handleIncrease={handleIncrease}/>
      </S.Content>
      <S.Row>
        <S.Value />
        <S.TicketValue>{item.event.ticketValue}</S.TicketValue>
      </S.Row>
    </S.Ticket>
  )
}

export default Ticket;