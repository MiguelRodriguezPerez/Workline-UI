import { ofertaApi } from "./ofertaApi";

export const desinscribirBusca = async(id) => {
    const resultado = await ofertaApi.put(`/desinscribirBusca/${id}`);
    return resultado;
}