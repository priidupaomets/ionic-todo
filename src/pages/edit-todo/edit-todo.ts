import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';


@IonicPage()
@Component({
  selector: 'page-edit-todo',
  templateUrl: 'edit-todo.html',
})
export class EditTodo {

  todo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data) {
    this.todo = { title: '', description: '' };
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad EditTodo');
    let todo = this.navParams.get('todo');

    if (typeof(todo) !== "undefined") {
      this.todo = todo;
    }
  }

  save() {
    //console.log('Saving todo');
    this.dataService.save(this.todo);
    this.navCtrl.pop();
  }
}
