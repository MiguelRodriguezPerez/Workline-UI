
import { uploadLogin } from "../../../../sections/login/api";
import { startLoggedUserRequest, updateLoggedUser } from "./loggedUserSlice"

export const getLoggedUser = ( credentials = {} ) => {
    return async( dispatch, getState ) => {
        const response = await uploadLogin(credentials);  // Realizas la petición
        const loggedUser = response.data;  // Almacenas solo el campo 'data' en la variable

        dispatch( updateLoggedUser({nombre : loggedUser.nombre, email : loggedUser.email, rol : loggedUser.rol}) );
    }
}

