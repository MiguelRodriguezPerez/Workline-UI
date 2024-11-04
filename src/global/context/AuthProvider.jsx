import { useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { uploadLogout } from '../../sections/login/helpers/'
import { getApiLoggedUser } from '../../sections/login/helpers/getApiLoggedUser'

const init = () => { return {} };

export const AuthProvider = ({ children }) => {

    const effectWrapper = async() => {
        return await getApiLoggedUser();
    }

    useEffect( () => {
        const usuario = effectWrapper();
        if(usuario) updateUser(usuario);
    }, [])
    

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

    return(
        <AuthContext.Provider value={{ user: userState, updateUser, resetUser}}>
            {children}
        </AuthContext.Provider>
    )
}