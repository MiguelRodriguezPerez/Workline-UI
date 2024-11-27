import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from '/src/global/context'
import { crearNuevoContrata } from "../api";

export const useCrearContrata = () => {

    const { updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const gestionarCrearContrata = async(dtoPreparado) => {
        const resultado = await crearNuevoContrata(dtoPreparado);
        if(resultado.status === 200) {
            console.log('BIEEEEEEEEEEN + CONTRATA');
            updateUser(resultado.data)
            navigate('/');
        }
        else console.log('Es normal tranquilo + CONTRATA')
    }

    return { gestionarCrearContrata }
        
}