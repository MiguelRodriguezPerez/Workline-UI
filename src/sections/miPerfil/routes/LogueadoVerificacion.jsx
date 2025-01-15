import { Navigate } from "react-router";
import { AuthContext } from "../../../global/context/AuthContext"
import { useContext } from "react";
import { useSelector } from "react-redux";

export const LogueadoVerificacion = ({ children }) => {

    const user = useSelector(state => state.loggedUser)
    return (user.nombre !== '') ? children : <Navigate to={'/login'}/>
}
