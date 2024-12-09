import { useEffect, useReducer, useState } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { uploadLogout } from '../../sections/login/helpers/'
import { getApiLoggedUser } from '../../sections/login/helpers/getApiLoggedUser'

const init = () => { 
    return {
        nombre : '',
        email : '',
        rol : ''
    } 
};

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
        
        const action = {
            type: 'reset_user',
            payload: {
                nombre : '',
                email : '',
                rol : ''
            } 
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