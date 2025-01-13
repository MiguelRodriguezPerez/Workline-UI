import { useContext } from 'react'
import { AuthContext } from '../../../global/context';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

export const LoggedContainer = () => {

    const { user, isLoading, resetUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const logoutEvent = () => {
        Cookies.remove('jwtToken', { path: '/ ' });
        resetUser();
        uploadLogout();
        navigate('/');
    }

    return (
        <>
            <Link to={'/miPerfil/misDatos'}>{user.nombre}</Link>
            <img src="/images/ui/logoutPc.png" id="logout" onClick={logoutEvent} />
        </>
    );
}
