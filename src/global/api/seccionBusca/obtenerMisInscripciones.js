import { buscaApi } from "./buscaApi"

export const obtenerMisInscripciones = async () => {
    const resultado = await buscaApi.get(`/miListaOfertas`);
    return resultado;
}