import React from 'react';
import { useColorScheme } from 'react-native';
import { EventList } from '../../components';

import * as S from './styles';

const MyTickets = () => {
  return (
    <S.Container>
      <EventList type='MyTickets'/>
    </S.Container>
  )
}

export default MyTickets;