import React, {useState} from 'react';
import { TicketProps } from './types';
import NumberControl from '../NumberControl';


import * as S from './styles';

const Ticket = (/**{ event, number }: TicketProps*/) => {
  const [number, setNumber] = useState(0);

  return (
    <S.Ticket>
      <S.Icon />
      <S.Content>
        <S.TicketEvent>Event Name</S.TicketEvent>
        <NumberControl cart value={number} handleDecrease={() => setNumber(prev => prev - 1)} handleIncrease={() => setNumber(prev => prev+1)}/>
      </S.Content>
      <S.Row>
      <S.Value />
      <S.TicketValue>30</S.TicketValue>
      </S.Row>
    </S.Ticket>
  )
}

export default Ticket;