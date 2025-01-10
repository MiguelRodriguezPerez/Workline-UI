import { miPerfilApi } from "./miPerfilApi"

export const obtenerContextoUsuarioConectado = async (params) => {
    const resultado = await miPerfilApi.get('/getCurrentUser');
    return resultado;
}