import { contrataApi } from "./contrataApi"

export const borrarOferta = async (id) => {
    const resultado = contrataApi.delete(`/borrarOferta/${id}`);
    return resultado;
}