import { Reducer } from 'redux';
import Event from '../../types/event';
import events from '../../constants/events';
import { EventsDispatchTypes, FilterTypes, ListEventState } from './types';

const INITIAL_STATE: ListEventState = {
  data: [],
  filter: 'All',
  myTickets: [],
  search: ''
}

function LoadEvents(search: string, filter: FilterTypes): Event[] {
  let filteredEvents = [];
  if (filter === 'All') filteredEvents = events.filter(event => event.name.includes(search));
  else filteredEvents = events.filter(event => event.name.includes(search) && event.organizerType === filter);
  return filteredEvents;
}

const EventsReducer: Reducer<ListEventState> = (state = INITIAL_STATE, action: EventsDispatchTypes) => {
  let newState: ListEventState = {...state};

  switch (action.type) {
    case 'HANDLE_SEARCH': 
      newState = {...state, search: action.data.search ?? ''};
      break;
    case 'HANDLE_FILTER': 
      newState = {...state, filter: action.data.filterType};
      break;
    case 'ADD_EVENT':
      newState = {...state, myTickets: [...state.myTickets, action.data.ticket]}
      break;
    case 'LOAD_EVENTS': 
      const events = LoadEvents(state.search, state.filter);
      newState = {...state, data: events};
      break;
    default:
      newState = {...state};
  }


  return newState;
}

export default EventsReducer;