import { buscaApi } from './buscaApi'

export const editarConocimiento = async (experiencia) => {
    const resultado = await buscaApi.put('/editarExperiencia' , experiencia);
    return resultado;
}