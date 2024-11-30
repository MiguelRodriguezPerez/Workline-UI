import { Navigate } from "react-router";
import { AuthContext } from "../../../global/context/AuthContext"
import { useContext } from "react";

export const LogueadoVerificacion = ({ children }) => {

    const { user, isLoading } = useContext(AuthContext);
    console.log(user.nombre)

    //Sospechoso de fallar
    if (!isLoading) return (user.nombre !== '') ? children : <Navigate to={'/login'}/>
}
