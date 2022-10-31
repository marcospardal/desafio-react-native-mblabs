import { Reducer } from 'redux';
import Ticket from '../../types/ticket';
import { CartDispatchTypes, CartState } from './types';

const INITIAL_STATE: CartState = {
  items: [],
  total: 0
}

const CartReducer: Reducer<CartState> = (state = INITIAL_STATE, action: CartDispatchTypes) => {
  let newState = {...state};

  switch (action.type) {
    case 'ADD_ITEM': {
      let total = 0;
      const index = newState.items.findIndex(item => item.event.id === action.data.item.event.id)
      if (index === -1) newState.items.push(action.data.item);
      else {
        const item = newState.items[index];
        newState.items[index] = {...item, number: item.number + action.data.item.number};
      }
      newState.items.forEach(item => {
        total += item.number * item.event.ticketValue;
      })
      newState.total = total;
    }
      break;
    case 'HANDLE_ITEM_NUMBER': {
      let total = 0;
      const editIndex = newState.items.findIndex(item => item.event.id === action.data.item.event.id);
      newState.items[editIndex] = action.data.item;
      newState.items.forEach((item) => {
        total += item.number * item.event.ticketValue;
      });
      newState.total = total;
    }
      break;
    case 'HANDLE_FINISH': 
      newState.items = [];
      break;
    case 'REMOVE_ITEM': 
      {
        let total = 0;
        newState.items = newState.items.filter(item => item.event.id !== action.data.item.event.id);
        newState.items.forEach((item) => total += item.number * item.event.ticketValue)
        newState.total = total;
      }
      break;
    default:
      newState = {...state};
      break;
  }

  return newState;
}

export default CartReducer;