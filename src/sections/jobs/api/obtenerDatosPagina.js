import { ofertaApi } from './ofertaApi'

export const obtenerDatosPagina = async (numPag, busquedaOferta) => {
    
    const bodyRequest = {
        pagina: numPag,
        busquedaOferta: busquedaOferta,
    }

    const resultado = await ofertaApi.post('/busqueda' , bodyRequest);
    console.log(resultado.data)
    return resultado;
}