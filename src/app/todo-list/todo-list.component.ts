import { Component, OnInit } from '@angular/core';
import { toDoCollection, toDo } from './toDoModel';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  public collection = new toDoCollection();
  toDolist = this.collection.getToDos();
  constructor() { }
  setSome(input) {
    this.collection.addToDo(new toDo(input))
  }
  ngOnInit() {
  }
  removeSome(item) {
    this.collection.deleteToDo(item);
  }

}
