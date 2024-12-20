import Cookies from "js-cookie";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../global/context/AuthContext';
import { uploadLogout } from '/src/sections/login/helpers'

import '../styles/wkHeaderLogin.css';


export const WkHeaderLogin = () => {

  const { user, isLoading, resetUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutEvent = () => {
    resetUser();
    uploadLogout();
    Cookies.remove('jwtToken', { path : '/ '});
    navigate('/');
  }

  return (
    <div className='header-login'>
        {
          !isLoading &&
          user.nombre === '' ? 
            <>
              <Link to={'/login'}>Iniciar sesión</Link> 
              <img src="/images/ui/userLogin.png" onClick={ () => { navigate('/login')} }/> 
            </>
            : 
            <>
              <Link to={'/miPerfil/misDatos'}>{user.nombre}</Link> 
              <img src="/images/ui/logoutPc.png" id="logout" onClick={ logoutEvent }/> 
            </>   
        } 
      </div>
  )
}
