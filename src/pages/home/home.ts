import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditTodo } from '../edit-todo/edit-todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todos: any;

  constructor(public navCtrl: NavController) {

    this.todos = [
      { title: 'Ärka üles', description: 'Enne kõike peame silmad lahti tegema' },
      { title: 'Pese silmad', description: 'Siis taastame nägemise' },
      { title: 'Pane riidesse', description: 'Seejärel paneme end mõislikusse vormi' },
      { title: 'Söö kõht täis', description: 'Ja valmistame end pikaks päevaks ette' },
      { title: 'Mine kooli', description: 'Edasi matkame pisut' },
      { title: 'Kuula hoolikalt loenguid', description: 'Ning kogume nii palju tarkusi kui võimalik' }
    ];

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
