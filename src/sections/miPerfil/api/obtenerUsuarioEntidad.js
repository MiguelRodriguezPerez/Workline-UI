import { miPerfilApi } from "./miPerfilApi"

export const obtenerUsuarioEntidad = async() => {
    const resultado = await miPerfilApi.get('/getUserData');
    return resultado.data;
}