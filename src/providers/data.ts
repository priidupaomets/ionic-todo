import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

  todos: any = [];

  constructor(public http: Http) {
    console.log('Hello Data Provider');
  }

  load() {
    //Loome lubaduse (promise), mis millalgi tagastab meile andmeid
    return new Promise(resolve => {
      if (this.todos.length > 0) {
        resolve(this.todos);
      } else {
        // Meil pole veel midagi tagastada, seega ei tee midagi
        //resolve(undefined);
      }
    });
  }

  save(todo) {
    // Kui leiame oma elementide hulgast samasuguse, siis muudame seda, vastasel juhul lisame
    let index = this.todos.indexOf(todo);

    if (index === -1) {
      this.todos.push(todo);
    } else {
      this.todos[index] = todo;
    }
  }
}
