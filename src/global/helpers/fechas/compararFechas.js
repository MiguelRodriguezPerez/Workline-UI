import { parsearFecha } from "./parsearFecha";

export function compararFechas(fechaUEInicio, fechaUEFin) {
    return ( parsearFecha( fechaUEInicio ) < parsearFecha( fechaUEFin ) );
}