import { useEffect, useReducer, useState } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { uploadLogout } from '../../sections/login/helpers/'
import { getApiLoggedUser } from '../../sections/login/helpers/getApiLoggedUser'

const init = () => { return {} };

export const AuthProvider = ({ children }) => {

    /*isLoading lo tuviste que definir para el HOC que impide que un usuario que no sea de 
    tipo CONTRATA acceda a mis ofertas. Por la razón que sea ese HOC no puede esperar a 
    que se resuelva el efecto*/
    const [isLoading, setIsLoading] = useState(true);
    const [userState, dispatch] = useReducer(authReducer, {}, init);

    const updateUser = (user = {}) => {
        const action = {
            type: 'update_user',
            payload: user
        }
        dispatch(action);
    };

    const resetUser = () => {
        /*uploadLogout se llama aquí porque no tiene mucho sentido ensuciar el componente loginHeader
        con esta función. En cambio uploadUser se llama en el formlogin porque primero tienes que comprobar
        que el usuario existe antes de llamar a updateUser*/
        uploadLogout();
        const action = {
            type: 'reset_user',
            payload: {}
        }
        dispatch(action);
    };

    useEffect(() => {
        const fetchUser = async () => {
            const usuario = await getApiLoggedUser();
            if (usuario) updateUser(usuario);
            setIsLoading(false);
        };
        fetchUser();
    }, []);

    return(
        <AuthContext.Provider value={{ user: userState, updateUser, resetUser, isLoading: isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}