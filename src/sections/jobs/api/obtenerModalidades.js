import { ofertaApi } from "./ofertaApi";

export const obtenerModalidades = async () => {
    const resultado = await ofertaApi.get('/modalidades');
    return resultado;
}