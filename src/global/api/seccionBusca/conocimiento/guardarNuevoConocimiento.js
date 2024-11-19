import { buscaApi } from '../buscaApi'

export const guardarNuevoConocimiento = async (conocimiento) => {
    const resultado = await buscaApi.post('/nuevoConocimiento', conocimiento);
    return resultado;
}