import { buscaApi } from '../../../global/api/seccionBusca/buscaApi'

export const comprobarInscripcionOferta = async (id) => {
    const resultado = await buscaApi.get(`/estaInscritoOferta/${id}`);
    return resultado;
}