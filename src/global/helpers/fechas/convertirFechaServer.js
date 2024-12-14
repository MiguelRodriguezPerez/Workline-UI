import { replace } from "react-router";

export const convertirFechaServer = (fechaUE = '') => {

    let resultado = fechaUE.split('/');
    resultado = resultado.reverse().join();
    resultado = resultado.replaceAll(',','-');

    return resultado;
}