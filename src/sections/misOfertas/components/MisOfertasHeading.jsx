import React, { useContext } from 'react'
import { AuthContext } from '../../../global/context/AuthContext'

import '../styles/misOfertasHeading.css'
import { MisOfertasContext } from '../context'

export const MisOfertasHeading = () => {

    const {pagina} = useContext(MisOfertasContext);
    
    return (
        <h2 className='mis-ofertas-heading'> {pagina.totalElements} ofertas publicadas</h2>
    )
}
