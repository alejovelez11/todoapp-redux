import * as fromFiltro from "./filter.action";

const estadoInicial:fromFiltro.filtrosValidos = "todos"
export function filtroReducer(state = estadoInicial, action:fromFiltro.acciones):fromFiltro.filtrosValidos{
   switch (action.type) {
       case fromFiltro.set_filtro:
            return action.filtro
           break;
   
       default:
           return state
           break;
   } 
}
