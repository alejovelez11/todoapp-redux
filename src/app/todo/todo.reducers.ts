import * as fromTodo from "./todo.actions";
import { Todo } from './model/todo.model';

const todo1 = new Todo("Vencer a thanos")
const todo2 = new Todo("Salvar el mundo")
const todo3 = new Todo("Aprender Ngrx")

todo2.completado = true

const estadoInicial: Todo[] = [todo1, todo2,todo3]

export function todoReducer(state = estadoInicial, action:fromTodo.Acciones):Todo[]{
    switch (action.type) {
        case fromTodo.agregar_todo:
            const todo = new Todo(action.texto)
            return [...state, todo]

        case fromTodo.toggle_todo:
            return state.map(todoEdit => {
                if (todoEdit.id == action.id) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    }
                } else {
                    return todoEdit
                }
            })
        
        case fromTodo.editar_todo:
            return state.map(todoEdit =>{
                if (todoEdit.id == action.id) {
                    return {
                        ...todoEdit,
                        texto: action.texto
                    }
                } else {
                    return todoEdit
                }
            })

        case fromTodo.borrar_todo:
            return state.filter(todo => todo.id !== action.id)
        
        case fromTodo.toggle_all_todo:
            return state.map(todoEdit => {
                return {
                    ...todoEdit,
                    completado: action.completado
                }
            })
        
        case fromTodo.borrar_all_todo:
            return state.filter( todoBorrar => !todoBorrar.completado)
            
        default:
            return state
    }
}