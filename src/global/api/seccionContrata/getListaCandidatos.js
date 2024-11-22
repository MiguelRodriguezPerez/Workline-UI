import { contrataApi } from "./contrataApi"

export const getListaCandidatos = async (id) => {
    const resultado = await contrataApi.get(`/obtenerListaCandidatos/${id}`);
    return resultado;
}