import { buscaApi } from './buscaApi'

export const editarExperiencia = async (experiencia, id) => {
    const resultado = await buscaApi.put(`/editarExperiencia/${id}`, experiencia);
    return resultado;
}