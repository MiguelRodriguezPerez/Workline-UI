import { contrataApi } from "./contrataApi"

export const getPaginaOfertaContrata = async (numPag) => {
    const resultado = await contrataApi.get(`/ofertas/pagina/${numPag}`);
    return resultado
}