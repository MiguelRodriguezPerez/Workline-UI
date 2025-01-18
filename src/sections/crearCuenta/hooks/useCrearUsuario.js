import { useDispatch } from "react-redux";
import { updateLoggedUser } from "../../../global/redux/slices/loggedUser";
import { prepararUsuarioDto } from "../helpers";
import { useNavigate } from "react-router";
import { crearNuevoBusca, crearNuevoContrata } from "../api";

export const useCrearUsuario = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const gestionarCrearUsuario = async(data) => {
        const dtoPreparado = prepararUsuarioDto(data);

        switch(dtoPreparado.rol){
            case 'CONTRATA' :
                const resultadoPeticionContrata = await crearNuevoContrata(dtoPreparado);
                if(resultadoPeticionContrata.data){
                    dispatch(updateLoggedUser(resultadoPeticionContrata.data));
                    navigate('/');
                }
                break;
            case 'BUSCA' :
                const resultadoPeticionBusca = await crearNuevoBusca(dtoPreparado);
                if(resultadoPeticionBusca.data){
                    dispatch(updateLoggedUser(resultadoPeticionBusca.data))
                    navigate('/nuevaCuenta/segundaParte');
                }
                break;
            default :
                console.error('¿Como has llegado aquí?');
                break;
        }
    }

    return { gestionarCrearUsuario }

}