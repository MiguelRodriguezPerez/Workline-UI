import { useContext } from 'react'
import { AuthContext } from '/src/global/context'
import { borrarCuenta } from '../api'

import '/src/global/styles/elementos.css'
import { useNavigate } from 'react-router'

export const BorrarCuentaButton = () => {

    const { resetUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const buttonEvent = async() => {
        const resultado = await borrarCuenta();
        if(resultado.status === 200){
            resetUser();
            navigate('/');
        }
    }

    return (
        <button className="red-button borrar-cuenta-button" onClick={buttonEvent}>Borrar Cuenta</button>
    )
}
