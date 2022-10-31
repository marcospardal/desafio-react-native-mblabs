import React from 'react';
import { Ticket } from '../../components';

import * as S from './styles';

const Cart = () => {
 return (
  <S.Container>
    <S.List
      data={['1', '2']}
      renderItem={(item: string) => <Ticket />}
      keyExtractor={(item: string) => item}
    />
    <S.Finish>
      <S.FinishLabel>
        Finish $60
      </S.FinishLabel>
    </S.Finish>
  </S.Container>
 )
};

export default Cart;