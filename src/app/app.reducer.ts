import {Todo} from './todos/models/todo.model';
import {ActionReducerMap} from '@ngrx/store';
import {todoReducer} from './todos/todo.reducer';
import {validFilters} from './filter/filter.actions';
import {filterReducer} from './filter/filter.reducer';

export interface AppsState {
  todos: Todo[];
  filter: validFilters;
}

export const appReducers: ActionReducerMap<AppsState> = {
  todos: todoReducer,
  filter: filterReducer,
};
