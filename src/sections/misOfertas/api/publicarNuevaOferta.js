import { contrataApi } from "./contrataApi"

export const publicarNuevaOferta = async(ofertaApi) => {
    const resultado = await contrataApi.post('/nuevaOferta',ofertaApi);
    console.log(resultado);
    return resultado;
}