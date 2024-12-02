import React, { useContext } from 'react'

import { MisOfertasContext } from '../../../context'
import '../../../styles/misOfertasHeading.css'

export const MisOfertasHeading = () => {

    const { pagina } = useContext(MisOfertasContext);

    return (
        <h2 className='mis-ofertas-heading'> {pagina.totalElements} ofertas publicadas</h2>
    )
}
