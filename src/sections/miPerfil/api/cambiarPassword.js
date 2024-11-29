import { miPerfilApi } from "./miPerfilApi"

export const cambiarPassword = async (newPassword) => {
    const resultado = await miPerfilApi.put('/cambiarPassword', newPassword);
    return resultado;
}