import { borrarCuenta } from '../../api'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { resetLoggedUser } from '../../../../global/redux/slices/loggedUser'

import '/src/global/styles/elementos.css'
import Cookies from 'js-cookie'

export const BorrarCuentaButton = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const buttonEvent = async () => {
        /*Rediriges primero al usuario al homepage porque en el router de miPerfil hay un HOC LogueadoVerificacion
        que esta evaluando en el contexto el nombre del usuario para decidir si el usuario esta logueado
        y por tanto, si le da acceso a la página en la que se esta ejecutando el logout
        
        Si no rediriges el usuario a la homepage al inicio de la función, el HOC LogueadoVerificacion
        lo redirigirá a la página de login*/

        navigate('/');
        const resultado = await borrarCuenta();
        if (resultado.status === 200) {
            Cookies.remove('jwtToken', { path: '/ ' });
            dispatch(resetLoggedUser());
        }
    }

    return (
        <button className="red-button borrar-cuenta-button" onClick={buttonEvent}>Borrar Cuenta</button>
    )
}
