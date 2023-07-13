import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  template: `
    <ul>
      <li *ngFor="let todo of todos">{{ todo.title }}</li>
    </ul>
  `,
})
export class TodoComponent implements OnInit {
  todos: any[] | undefined;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(
      (todos) => {
        this.todos = todos;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
