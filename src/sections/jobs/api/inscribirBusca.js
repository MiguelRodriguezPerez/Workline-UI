import { ofertaApi } from './ofertaApi'

export const inscribirBusca = async (id) => {
    const resultado = await ofertaApi.put(`/inscribirBusca/${id}`);
    return resultado;
}