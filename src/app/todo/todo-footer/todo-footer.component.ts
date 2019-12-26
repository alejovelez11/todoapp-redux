import { Component, OnInit } from '@angular/core';
import * as fromFiltro from "../../filter/filter.action"
import * as fromTodo from "../../todo/todo.actions"
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos:fromFiltro.filtrosValidos[] = ["todos", "completados", "pendientes"]
  filtroActual: fromFiltro.filtrosValidos
  pendientes:number

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe((state:any) => {
      this.contarPedientes(state.todos)
      this.filtroActual = state.filtro
    })
  }
  cambiarFiltro(filtro:fromFiltro.filtrosValidos){
    const accion = new fromFiltro.SetFiltroAction(filtro)
    this.store.dispatch(accion)
  }
  contarPedientes(todos:Todo[]){    
    this.pendientes = todos.filter(todo => !todo.completado).length
  }
  borrarTodo(){
    const accion = new fromTodo.BorrarAllTodosAction()
    this.store.dispatch(accion)
  }
}
