import { useContext } from 'react'
import { AuthContext } from '../../../global/context';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const LoggedContainer = () => {

    const loggedUser = useSelector( (state) => state.loggedUser);
    const navigate = useNavigate();

    const logoutEvent = () => {
        Cookies.remove('jwtToken', { path: '/ ' });
        resetUser();
        uploadLogout();
        navigate('/');
    }

    return (
        <>
            <Link to={'/miPerfil/misDatos'}>{loggedUser.nombre}</Link>
            <img src="/images/ui/logoutPc.png" id="logout" onClick={logoutEvent} />
        </>
    );
}
