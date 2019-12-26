import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from "./todo/todo.reducers"
import * as fromFiltro from "./filter/filter.reducers"

export interface AppState{
    todos: Todo[]
    filtro: string
}

export const reducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filtro: fromFiltro.filtroReducer
}