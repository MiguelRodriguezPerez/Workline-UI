import { miPerfilApi } from "./miPerfilApi"

export const confirmarPassword = async (password) => {
    const resultado = await miPerfilApi.post('/confirmarPassword',JSON.stringify(password));
    return resultado;
}