import { useContext } from "react"
import { AuthContext } from "../../../global/context/AuthContext"
import { Navigate } from "react-router";

export const ContrataRolVerificacion = ({ children }) => {
  
    const { user, isLoading } = useContext( AuthContext );

    if(!isLoading) return (user?.rol === 'CONTRATA') ? children : <Navigate to='/login'/>

}
