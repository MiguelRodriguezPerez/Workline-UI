import Cookies from "js-cookie";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../global/context/AuthContext';
import { uploadLogout } from '/src/sections/login/api'
import { UnloggedContainer, LoggedContainer } from "./";

import '../../styles/wkHeaderLogin.css';
import { useSelector } from "react-redux";

export const WkHeaderLogin = () => {

  const loggedUser = useSelector( (state) => state.loggedUser);

  return (
    <div className='header-login'>
      {
        loggedUser.nombre === '' ?
          <UnloggedContainer/> : <LoggedContainer/>
      }
    </div>
  )
}

  