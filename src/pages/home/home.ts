import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditTodo } from '../edit-todo/edit-todo';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public dataService: Data) {

  }

  ionViewDidLoad() {
    this.dataService.load();
  }

  addTodo() {
    //console.log('Adding new Todo item');
    this.navCtrl.push(EditTodo);
  }

  editTodo(todo) {
    //console.log('Edit todo');
    this.navCtrl.push(EditTodo, {
      todo: todo
    });
  }

}
