import React from 'react';
import { NumberControlProps } from './types';

import * as S from './styles';

/**
 * 
 * @author Marcos Pardal
 * @param value number value
 * @param handleIncrease plus button function
 * @param handleDecrease minus button function
 */
const NumberControl = ({ value, handleIncrease, handleDecrease, cart = false }: NumberControlProps) => {

  return (
    <S.Container>
      <S.Button onPress={handleDecrease} disabled={value === 0 && !cart}>
        <S.Icon name={cart && value === 1 ? 'remove' : 'minus'} size={18} disabled={value === 0}/>
      </S.Button>
      <S.Number>{value}</S.Number>
      <S.Button onPress={handleIncrease}>
        <S.Icon name='plus' size={18} />
      </S.Button>
    </S.Container>
  )
}

export default NumberControl;