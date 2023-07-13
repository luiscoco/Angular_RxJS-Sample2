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
```

```


## Component code
```

```
