import { nuevaCuentaApi } from "./nuevaCuentaApi"

export const crearNuevoContrata = async(dtoPreparado) => {
    const resultado = await nuevaCuentaApi.post('/nuevoContrata', dtoPreparado);
    return resultado;
} 