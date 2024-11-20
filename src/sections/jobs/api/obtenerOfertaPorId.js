import { ofertaApi } from "./ofertaApi";

export const obtenerOfertaPorId = async (id) => {
    const resultado = await ofertaApi.get(`/obtenerOfertaPorId/${id}`);
    return resultado;
}