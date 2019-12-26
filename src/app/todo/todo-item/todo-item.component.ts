import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ToggleTodosAction, EditarTodosAction, BorrarTodosAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo
  checkFiel:FormControl
  txtInput:FormControl
  editando:boolean = false
  @ViewChild("txtInputFisico", {static: false}) txtInputFisico: ElementRef
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.checkFiel = new FormControl(this.todo.completado)
    this.txtInput = new FormControl(this.todo.texto, Validators.required)    
    this.checkFiel.valueChanges.subscribe(() => {
      const accion = new ToggleTodosAction(this.todo.id)
      this.store.dispatch(accion)
    })
  }
  editar(){
    this.editando = true
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select()
    }, 1);
  }
  terminarEdicion(id, textoEdit){
    this.editando = false;
    if (this.txtInput.invalid) {
      return false
    }
    if (this.txtInput.value === this.todo.texto) {
      return false
    }
    const accion = new EditarTodosAction(id, textoEdit)
    this.store.dispatch(accion)
    
  }
  borrarTodo(){
    const accion = new BorrarTodosAction(this.todo.id)
    this.store.dispatch(accion)
  }

}
