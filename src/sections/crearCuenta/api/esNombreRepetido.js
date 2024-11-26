import { nuevaCuentaApi } from "./nuevaCuentaApi";

export const esNombreRepetido = async (nombre) => {
    const resultado = await nuevaCuentaApi.get(`/esNombreRepetido/${nombre}`);
    /*Esta función se llama directamente en una validación de un formulario
    de react-hook-form. Para evitar problemas con acceder a la propiedad data del objeto 
    que devuelve axios, lo devuelvo directamente*/
    console.log(resultado)
    return resultado.data;
}