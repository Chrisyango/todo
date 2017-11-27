import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private todos = new BehaviorSubject<any>(['Click me to delete me!']);
  todo = this.todos.asObservable();

  constructor() { }

  changeTodo(todo) {
    this.todos.next(todo);
  }
}
