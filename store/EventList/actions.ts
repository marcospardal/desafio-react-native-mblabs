import { Dispatch } from 'redux';
import Event from '../../types/event';
import { EventsDispatchTypes, LOAD_EVENTS, HANDLE_SEARCH, FilterTypes, HANDLE_FILTER, ADD_EVENT } from './types';

export const LoadEvents = () => (dispatch: Dispatch<EventsDispatchTypes>) => {
  dispatch({
    type: LOAD_EVENTS
  })
}

export const HandleSearch = (search: string) => (dispatch: Dispatch<EventsDispatchTypes>) => {
  dispatch({
    type: HANDLE_SEARCH,
    data: {
      search
    }
  })
}

export const HandleFilter = (filterType: FilterTypes) => (dispatch: Dispatch<EventsDispatchTypes>) => {
  dispatch({
    type: HANDLE_FILTER,
    data: {
      filterType
    }
  })
}

export const AddTicketEvent = (ticket: Event) => (dispatch: Dispatch<EventsDispatchTypes>) => {
  dispatch({
    type: ADD_EVENT,
    data: {
      ticket
    }
  })
}