import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EditTodo } from '../pages/edit-todo/edit-todo';
import { Data } from '../providers/data';
import { HttpModule } from '@angular/http'; // Vaja storage jaoks
import { IonicStorageModule } from '@ionic/storage'; // Vaja storage jaoks

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditTodo
  ],
  imports: [
    BrowserModule,
    HttpModule, // Vaja lisada et storage t;;le hakkaks
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot() // Lisame Storage kasutamiseks
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditTodo
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data
  ]
})
export class AppModule {}
