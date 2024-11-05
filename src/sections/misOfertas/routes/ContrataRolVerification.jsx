import { useContext } from "react"
import { AuthContext } from "../../../global/context/AuthContext"
import { Navigate, useNavigate } from "react-router";

export const ContrataRolVerificacion = ({ children }) => {
  
    const { user } = useContext( AuthContext );
    console.log(user)
    return (user?.rol === 'CONTRATA') ? children : <Navigate to='/login'/>

}
