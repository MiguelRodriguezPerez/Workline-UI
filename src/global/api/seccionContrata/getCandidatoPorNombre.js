import { contrataApi } from "./contrataApi"

export const getCandidatoPorNombre = async (nombre) => {
    const resultado = await contrataApi.get(`/obtenerCandidato/${nombre}`);
    return resultado;
}