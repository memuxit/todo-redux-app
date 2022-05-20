import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppsState} from '../../app.reducer';
import * as filterActions from '../../filter/filter.actions';
import * as todoActions from '../../todos/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  currentFilter: filterActions.validFilters = 'all';
  filters: filterActions.validFilters[] = ['all', 'completed', 'pending'];
  pending = 0;

  constructor(
    private store: Store<AppsState>
  ) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.pending = state.todos.filter(todo => !todo.completed).length;
    });
  }

  changeFilter(filter: filterActions.validFilters): void {
    this.store.dispatch(filterActions.setFilter({filter}));
  }

  cleanCompleted(): void {
    this.store.dispatch(todoActions.cleanCompleted());
  }

}
