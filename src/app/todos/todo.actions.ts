import {createAction, props} from '@ngrx/store';

export const create = createAction(
  '[TODO] Create TODO',
  props<{text: string}>()
);

export const toggle = createAction(
  '[TODO] Toggle TODO',
  props<{id: number}>()
);

export const edit = createAction(
  '[TODO] Edit TODO',
  props<{id: number, text: string}>()
);

export const remove = createAction(
  '[TODO] Remove TODO',
  props<{id: number}>()
);

export const toggleAll = createAction(
  '[TODO] Toggle all TODO',
  props<{completed: boolean}>()
);

export const cleanCompleted = createAction(
  '[TODO] Clean completed'
);
