import { buscaApi } from "./buscaApi";

export const obtenerMisConocimientos = async () => {
    const resultado = await buscaApi.get('/busca/misConocimientos');
    return resultado;
}