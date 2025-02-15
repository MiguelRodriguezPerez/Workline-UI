import { useEffect, useReducer, useState } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { obtenerContextoUsuarioConectado } from '/src/sections/miPerfil/api'
import Cookies from "js-cookie";

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
            if(Cookies.get('jwtToken')){
                const usuario = await obtenerContextoUsuarioConectado();
                if (usuario.data) updateUser(usuario.data);
                setIsLoading(false);
            }
            else setIsLoading(false);
       };

        /*Para decidir si debe exigir el usuario logueado, comprueba
        si el token jwt existe. Ten en cuenta que existe un edge case obvio*/
        fetchUser();
    }, []);

    return(
        <AuthContext.Provider value={{ user: userState, updateUser, resetUser, isLoading: isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}