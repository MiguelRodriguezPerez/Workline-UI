import { useContext } from 'react'
import { AuthContext } from '../../../global/context/AuthContext'

export const CabeceraMiPerfil = () => {

    const { user: {nombre} } = useContext( AuthContext );

    return (
        <section>
            <h1>{nombre}</h1>
        </section>
    )
}
