export function formatearVistaFecha(d1){
    let resultado = d1.toString().split("-").reverse().join("-");
    resultado = resultado.replace("-" , "/");
    return resultado;
}