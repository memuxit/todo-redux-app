import {createReducer, on} from '@ngrx/store';
import {cleanCompleted, create, edit, remove, toggle, toggleAll} from './todo.actions';
import {Todo} from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Save the world'),
  new Todo('Beat Thanos'),
  new Todo('Buy Ironman suit'),
  new Todo('Steal Captain America shield'),
];

// tslint:disable-next-line:variable-name
const _todoReducer = createReducer(initialState,
  on(create, (state, {text}) => [...state, new Todo(text)]),
  on(remove, (state, {id}) => state.filter(todo => todo.id !== id)),
  on(cleanCompleted, state => state.filter(todo => !todo.completed)),
  on(toggle, (state, {id}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });
  }),
  on(edit, (state, {id, text}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text
        };
      } else {
        return todo;
      }
    });
  }),
  on(toggleAll, (state, {completed}) => {
    return state.map(todo => {
      return {
        ...todo,
        completed
      };
    });
  })
);

// tslint:disable-next-line:typedef
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
