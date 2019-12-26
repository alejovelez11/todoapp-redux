import { Action } from "@ngrx/store";

export const agregar_todo = "[TODO] Agregar todo"
export const toggle_todo = "[TODO] Toggle todo"
export const toggle_all_todo = "[TODO] Toggle all todo"
export const editar_todo = "[TODO] Editar todo"
export const borrar_todo = "[TODO] Borrar todo"
export const borrar_all_todo = "[TODO] Borrar all todo"

export class AgregarTodosAction implements Action {
    readonly type = agregar_todo
    constructor(public texto:string){}
}

export class ToggleTodosAction implements Action {
    readonly type = toggle_todo
    constructor(public id:number){}
}

export class EditarTodosAction implements Action {
    readonly type = editar_todo
    constructor(public id:number, public texto:string){}
}
export class BorrarTodosAction implements Action {
    readonly type = borrar_todo
    constructor(public id:number){}
}
export class ToglleAllTodosAction implements Action {
    readonly type = toggle_all_todo
    constructor(public completado:boolean){}
}

export class BorrarAllTodosAction implements Action {
    readonly type = borrar_all_todo
}

export type Acciones =  AgregarTodosAction | 
                        ToggleTodosAction  |
                        EditarTodosAction  |
                        BorrarTodosAction  |
                        ToglleAllTodosAction  |
                        BorrarAllTodosAction
                        