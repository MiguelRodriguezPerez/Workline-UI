import { ofertaApi } from "./ofertaApi";

export const obtenerTiposContrato = async () => {
    const resultado = await ofertaApi.get('/tiposContrato');
    return resultado;
}