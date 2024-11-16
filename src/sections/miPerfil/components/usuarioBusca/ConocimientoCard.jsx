import { OpcionesCard } from './OpcionesCard'

import '../../styles/seccionBusca/entidadCard.css'
import '/src/global/styles/elementos.css'

export const ConocimientoCard = ( { data = {} }) => {
  return (
    <li className='entidad-card nube'>
        <h3>{data.titulo}</h3>
        <OpcionesCard/>
        <p>{data.centroEducativo}</p>
        <p>{data.inicioPeriodoConocimiento + ' / ' + data.finPeriodoConocimiento}</p>
    </li>
  )
}
