import { buscaApi } from "./buscaApi"

export const borrarExperiencia = async (id) => {
    const resultado = await buscaApi.delete(`/borrarExperiencia/${id}`);
    return resultado;
}