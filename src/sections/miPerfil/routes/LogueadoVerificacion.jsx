import { Navigate } from "react-router";
import { AuthContext } from "../../../global/context/AuthContext"
import { useContext } from "react";

export const LogueadoVerificacion = ({ children }) => {

    const { user, isLoading } = useContext(AuthContext);

    if( !isLoading ) return (user) ? children : <Navigate to={'/login'}/>
}
