import { loginApi } from "./loginApi"

export const uploadLogin = async(user = {}) =>{
    console.log(user)
    const resultado = await loginApi.post('/login', user);
    return resultado;
}
