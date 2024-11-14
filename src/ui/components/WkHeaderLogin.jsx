import { useContext } from "react";
import { AuthContext } from '../../global/context/AuthContext'
import '../styles/wkHeaderLogin.css'
import { Link, Navigate, useNavigate } from "react-router-dom";


export const WkHeaderLogin = () => {

  const { user, resetUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutEvent = () => {
    resetUser();
    navigate('/');
  }

  return (
    <div className='header-login'>
        {
          user.nombre === undefined ? <Link to={'/login'}>Iniciar sesión</Link> 
            : 
            <>
              <img src="/images/ui/logout.png" id="logout" onClick={ logoutEvent }/>
              <Link to={'/miPerfil/'}>{user.nombre}</Link> 
            </>   
        }
        <img src='/images/ui/userLogin.png' onClick={ () => {
          user.nombre === undefined ? 
            navigate('/login') 
          :
            navigate('/miPerfil/') 
        }}/>
        
      </div>
  )
}
