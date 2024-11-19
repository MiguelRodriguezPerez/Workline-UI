import { buscaApi } from '../buscaApi'

export const editarConocimiento = async (conocimiento, id) => {
    const resultado = await buscaApi.put(`/editarConocimiento/${id}`,conocimiento);
    return resultado;
}