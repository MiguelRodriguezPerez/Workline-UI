import Cookies from "js-cookie";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../global/context/AuthContext';
import { uploadLogout } from '/src/sections/login/api'
import { UnloggedContainer, LoggedContainer } from "./";

import '../../styles/wkHeaderLogin.css';

export const WkHeaderLogin = () => {

  const { user, isLoading, resetUser } = useContext(AuthContext);

  return (
    <div className='header-login'>
      {
        user.nombre === '' ?
          <UnloggedContainer/> : <LoggedContainer/>
      }
    </div>
  )
}

  