import { buscaApi } from "./buscaApi";

export const obtenerMisConocimientos = async () => {
    const resultado = await buscaApi.get('/misConocimientos');
    return resultado;
}