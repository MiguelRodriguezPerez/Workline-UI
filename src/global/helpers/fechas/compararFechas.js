export function compararFechas(fechaInicio, fechaFin) {

    fechaInicio = new Date(fechaInicio);
    fechaFin = new Date(fechaFin);
    
    return fechaInicio.getTime() < fechaFin.getTime();
}