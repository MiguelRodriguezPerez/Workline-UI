import { miPerfilApi } from "./miPerfilApi"

export const editarUsuarioEntidad = async( usuario ) => {
    const resultado = await miPerfilApi.put('/updateUserData',usuario);
    return resultado;
} 