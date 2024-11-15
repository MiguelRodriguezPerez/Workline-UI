import { buscaApi } from "./buscaApi";

export const obtenerMisExperiencias = async () => {
    const resultado = await buscaApi.get('/busca/MisExperiencias');
    return resultado;
}