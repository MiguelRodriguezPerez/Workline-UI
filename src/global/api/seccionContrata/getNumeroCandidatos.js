import { contrataApi } from "./contrataApi"

export const getNumeroCandidatos = async (id) => {
    const resultado = await contrataApi.get(`/obtenerNumeroCandidatos/${id}`);
    return resultado;
}