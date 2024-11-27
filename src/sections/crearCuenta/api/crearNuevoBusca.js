import { nuevaCuentaApi } from "./nuevaCuentaApi"

export const crearNuevoBusca = async (dtoPreparado) => {
    const resultado = await nuevaCuentaApi.post('/nuevoBusca' , dtoPreparado);
    return resultado;
}