import { loginApi } from "./loginApi"

export const uploadLogout = async() =>{
    const resultado = await loginApi.get('/logout');
    return resultado;
}