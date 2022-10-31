import { Dispatch } from 'redux';
import Ticket from '../../types/ticket';
import { CartDispatchTypes, ADD_ITEM, HANDLE_ITEM_NUMBER, HANDLE_FINISH, REMOVE_ITEM } from './types';

export const AddItem = (item: Ticket) => (dispatch: Dispatch<CartDispatchTypes>) => {
  dispatch({
    type: ADD_ITEM,
    data: {
      item
    }
  })
}

export const HandleItemNumber = (item: Ticket) => (dispatch: Dispatch<CartDispatchTypes>) => {
  dispatch({
    type: HANDLE_ITEM_NUMBER,
    data: {
      item
    }
  })
}

export const HandleFinish = () => (dispatch: Dispatch<CartDispatchTypes>) => {
  dispatch({
    type: HANDLE_FINISH
  })
}

export const RemoveItem = (item: Ticket) => (dispatch: Dispatch<CartDispatchTypes>) => {
  dispatch({
    type: REMOVE_ITEM,
    data: {
      item
    }
  })
}