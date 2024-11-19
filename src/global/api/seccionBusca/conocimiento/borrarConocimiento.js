import { buscaApi } from "../buscaApi"

export const borrarConocimiento = async(id) => {
    const resultado = await buscaApi.delete(`/borrarConocimiento/${id}`);
    return resultado;
}