import Ticket from "../../types/ticket";

export const ADD_ITEM = 'ADD_ITEM';
export const HANDLE_FINISH = 'HANDLE_FINISH';
export const HANDLE_ITEM_NUMBER = 'HANDLE_ITEM_NUMBER';

interface AddItem {
  type: typeof ADD_ITEM,
  data: {
    item: Ticket
  }
}

interface HandleItemNumber {
  type: typeof HANDLE_ITEM_NUMBER,
  data: {
    item: Ticket
  }
}

interface HandleFinish {
  type: typeof HANDLE_FINISH
}

export type CartDispatchTypes = AddItem | HandleItemNumber | HandleFinish;

export interface CartState {
  items: Ticket[];
  total: number;
}