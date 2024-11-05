import React, { useContext } from 'react'
import { AuthContext } from '../../../global/context/AuthContext'

import '../styles/misOfertasHeading.css'

export const MisOfertasHeading = () => {

    const { user } = useContext(AuthContext); 
    
    return (
        <h2 className='mis-ofertas-heading'> {user.listaOfertas.length} ofertas publicadas</h2>
    )
}
