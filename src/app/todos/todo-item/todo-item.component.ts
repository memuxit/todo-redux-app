import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../models/todo.model';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppsState} from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('physicalInput') txtPhysicalInput: ElementRef;
  chkCompleted: FormControl;
  txtInput: FormControl;
  editing = false;

  constructor(
    private store: Store<AppsState>
  ) { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkCompleted.valueChanges.subscribe(value => this.store.dispatch(actions.toggle({id: this.todo.id})));
  }

  edit(): void {
    this.editing = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(() => this.txtPhysicalInput.nativeElement.select(), 1);
  }

  finishEdition(): void {
    this.editing = false;

    if (this.txtInput.invalid) {
      return;
    }
    if (this.txtInput.value === this.todo.text) {
      return;
    }

    this.store.dispatch(actions.edit({
      id: this.todo.id,
      text: this.txtInput.value
    }));
  }

  remove(): void {
    this.store.dispatch(actions.remove({id: this.todo.id}));
  }

}
