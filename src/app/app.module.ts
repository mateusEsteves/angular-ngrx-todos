import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import {StoreModule, INITIAL_STATE} from '@ngrx/store';
import {todosReducer} from './reducers/todos.reducer';
import {initialState} from './app-store.inteface';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
      StoreModule.forRoot({
          todos: todosReducer
      })
  ],
  providers: [
      {provide: INITIAL_STATE, useFactory: initialState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
