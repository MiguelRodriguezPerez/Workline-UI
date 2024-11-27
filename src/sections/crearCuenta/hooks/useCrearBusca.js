import { useContext } from "react";
import { useNavigate } from "react-router";
import { crearNuevoBusca } from "../api";
import { AuthContext } from '/src/global/context';

export const useCrearBusca = () => {

    const { updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const gestionarCrearBusca = async(dtoPreparado) => {
        const resultado = await crearNuevoBusca(dtoPreparado);
        if(resultado.status === 200) {
            console.log('BIEEEEEEEEEEN + busca');
            updateUser(resultado.data)
            navigate('/nuevaCuenta/segundaParte');
        }
        else console.log('Es normal tranquilo + busca')
    }

    return { gestionarCrearBusca }
        
}