import { contrataApi } from "./contrataApi"

/*Necesitas mantener el id para que el endpoint sepa que oferta cambiar*/
export const editarOferta = async(ofertaApi, id) => {
    const resultado = await contrataApi.put(`/editarOferta/${id}`,ofertaApi);
    return resultado;
}