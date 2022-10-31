import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import CartReducer from './Cart/reducer';
import { CartState } from './Cart/types';
import EventsReducer from './EventList/reducer';
import { ListEventState } from './EventList/types';

export interface AppState {
  list: ListEventState;
  cart: CartState;
}

const rootReducer = combineReducers({ list: EventsReducer, cart: CartReducer });

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));