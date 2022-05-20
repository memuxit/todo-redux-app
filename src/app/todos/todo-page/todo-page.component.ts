import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppsState} from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  completed = false;

  constructor(
    private store: Store<AppsState>
  ) { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty

  }

  toggleAll(): void {
    this.completed = !this.completed;
    this.store.dispatch(actions.toggleAll({completed: this.completed}));
  }

}
