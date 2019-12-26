import { Component, OnInit } from '@angular/core';
import { ToglleAllTodosAction } from './todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
  completado = false
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll(){
    this.completado = !this.completado
    const accion = new ToglleAllTodosAction(this.completado)
    this.store.dispatch(accion)
  }

}
