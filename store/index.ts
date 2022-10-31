import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import EventsReducer from './EventList/reducer';
import { ListEventState } from './EventList/types';

export interface AppState {
  list: ListEventState;
  // cart: CartState;
}

const rootReducer = combineReducers({ list: EventsReducer });

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));