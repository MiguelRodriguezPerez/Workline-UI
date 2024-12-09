import { Navigate } from "react-router";
import { AuthContext } from "../../../global/context/AuthContext"
import { useContext } from "react";

export const LogueadoVerificacion = ({ children }) => {

    const { user, isLoading } = useContext(AuthContext);
    if (!isLoading) return (user && user.nombre !== '') ? children : <Navigate to={'/login'}/>
}
