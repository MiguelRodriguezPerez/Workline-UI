import { buscaApi } from "./buscaApi"

export const guardarNuevaExperiencia = async(exp) => {
    const resultado = await buscaApi.post('/nuevaExperiencia',exp);
    return resultado;
}