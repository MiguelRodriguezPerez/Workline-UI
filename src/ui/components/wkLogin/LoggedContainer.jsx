import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetLoggedUser } from '../../../global/redux/slices/loggedUser';
import { uploadLogout } from '../../../sections/login/api';

export const LoggedContainer = () => {

    const loggedUser = useSelector(state => state.loggedUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutEvent = () => {
        Cookies.remove('jwtToken', { path: '/ ' });
        uploadLogout();
        dispatch(resetLoggedUser());
        navigate('/');
    }

    return (
        <>
            <Link to={'/miPerfil/misDatos'}>{loggedUser.nombre}</Link>
            <img src="/images/ui/logoutPc.png" id="logout" onClick={logoutEvent} />
        </>
    );
}
