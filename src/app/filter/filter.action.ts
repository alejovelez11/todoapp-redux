import { Action } from '@ngrx/store';

export const set_filtro = "[Filter] set filtro"
export type filtrosValidos = "todos" | "completados" | "pendientes"

export class SetFiltroAction implements Action {
    readonly type = set_filtro
    constructor(public filtro:filtrosValidos){
        
    }
}
export type acciones = SetFiltroAction