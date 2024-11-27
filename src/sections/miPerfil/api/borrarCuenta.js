import { miPerfilApi } from './miPerfilApi'

export const borrarCuenta = async () => {
    const resultado = await miPerfilApi.delete('/borrarCuentaUsuarioLogueado');
    return resultado;
}