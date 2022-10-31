import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';

import * as S from './styles';

const CartIcon = () => {
  const cart = useSelector((state: AppState) => state.cart);

  return (
    <>
      <S.CartIcon />
      {cart.items.length !== 0 && 
        <S.ContainerNumber>
          <S.Number>{cart.items.length}</S.Number>
        </S.ContainerNumber>
      }
    </>
  )
}

export default CartIcon;