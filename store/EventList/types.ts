import Event from '../../types/event';

export const HANDLE_SEARCH = 'HANDLE_SEARCH';
export const HANDLE_FILTER = 'HANDLE_FILTER';
export const LOAD_EVENTS = 'LOAD_EVENTS';
export const ADD_EVENT = 'ADD_EVENT';

export type FilterTypes = 'All' | 'College' | 'Company'

interface HandleSearch {
  type: typeof HANDLE_SEARCH,
  data: {
    search?: string
  }
}

interface HandleFilter {
  type: typeof HANDLE_FILTER,
  data: {
    filterType: FilterTypes
  }
}

interface LoadEvents {
  type: typeof LOAD_EVENTS,
}

interface AddTicketEvent {
  type: typeof ADD_EVENT,
  data: {
    ticket: Event
  }
}

export type EventsDispatchTypes = HandleSearch | HandleFilter | LoadEvents | AddTicketEvent;

export interface ListEventState {
  readonly data: Event[];
  readonly myTickets: Event[];
  search: string;
  filter: FilterTypes;
}