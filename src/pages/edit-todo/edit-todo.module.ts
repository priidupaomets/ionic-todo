import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditTodo } from './edit-todo';

@NgModule({
  declarations: [
    EditTodo,
  ],
  imports: [
    IonicPageModule.forChild(EditTodo),
  ],
  exports: [
    EditTodo
  ]
})
export class EditTodoModule {}
