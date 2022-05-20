import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as actions from '../todo.actions';
import {AppsState} from '../../app.reducer';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;

  constructor(
    private store: Store<AppsState>
  ) {
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty

  }

  add(): void {
    if (this.txtInput.invalid) {
      return;
    }
    this.store.dispatch(actions.create({text: this.txtInput.value}));
    this.txtInput.reset();
  }

}
