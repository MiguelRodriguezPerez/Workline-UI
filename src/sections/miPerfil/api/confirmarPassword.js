import { miPerfilApi } from "./miPerfilApi"

export const confirmarPassword = async (password) => {
    const resultado = await miPerfilApi.post('/confirmarPassword',password);
    return resultado;
}