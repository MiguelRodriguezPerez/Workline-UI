export function parsearFecha(fechaUE = '') {
    const arrFecha = fechaUE.split('/')
    //Los meses van de 0 a 11
    return new Date( arrFecha[2], parseInt(arrFecha[1]) - 1 , arrFecha[0] );
}