import {Action, createReducer, on} from '@ngrx/store';
import {setFilter, validFilters} from './filter.actions';

export const initialState: validFilters = 'all';

// tslint:disable-next-line:variable-name
const _filterReducer = createReducer<validFilters, Action>(initialState,
  on(setFilter, (state, {filter}) => filter),
);

// tslint:disable-next-line:typedef
export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
