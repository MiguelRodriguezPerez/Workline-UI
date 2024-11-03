import { uploadLogin } from "../../sections/login/helpers/uploadLogin"
import { uploadLogout } from "../../sections/login/helpers/uploadLogout"
import { resetUser, setUser } from "./contrataSlice"



export const getLoggedUser = (userCredentials = {}) =>{

    return async (dispatch) => {
        const loggedUser = await uploadLogin(userCredentials)
        //Pendiente switch
        if(loggedUser) dispatch( setUser( loggedUser ) );
    }

}

export const logoutCurrentUser = () => {

    return async (dispatch) => {
        const response = await uploadLogout();
        dispatch(resetUser());
    }
    
}