# Sample2

## Service code

```Typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos/';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(map((response) => response));
  }
}
```

## Template code

index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Angular RxJS Todo App</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>

<body>
  <app-todo></app-todo>
</body>

</html>
```

## Component code
```
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
```
