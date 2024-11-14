import { useContext } from 'react'
import { AuthContext } from '../../../global/context/AuthContext'

import '../styles/cabeceraMiPerfil.css';

export const CabeceraMiPerfil = () => {

    const { user: {nombre} } = useContext( AuthContext );

    return (
        <section>
            <h1 className='cabecera'>{nombre}</h1>
        </section>
    )
}
