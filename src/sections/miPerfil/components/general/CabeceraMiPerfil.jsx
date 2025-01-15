import { useContext } from 'react'
import { AuthContext } from '../../../../global/context/AuthContext'
import { useSelector } from 'react-redux';

import '../../styles/general/cabeceraMiPerfil.css';


export const CabeceraMiPerfil = () => {

    const user = useSelector(state => state.loggedUser);

    return (
        <section>
            <h1 className='cabecera'>{user.nombre}</h1>
        </section>
    )
}
