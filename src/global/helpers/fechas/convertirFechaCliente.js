export const convertirFechaCliente = (fechaUSA = '') => {
    let resultado = fechaUSA.split('-');
    resultado = resultado.reverse().join();
    resultado = resultado.replaceAll(',','/')
  
    return resultado;
}
  