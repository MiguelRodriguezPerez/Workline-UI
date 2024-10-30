import { useContext } from 'react'
import { JobOfferContext } from '../../context/jobOffer/jobOfferContext'

import '../../styles/jobOffer/jobOfferInfo.css'

export const JobOfferInfo = () => {

  const oferta = useContext(JobOfferContext);
  console.log(oferta)

  return (
    //Cambiar a section div
    <table className='nube offer-info'>
      <thead>
        <tr>
          <th><p>{ oferta.ciudad }</p></th>
          <th><p>{ oferta.tipoContrato }</p></th>
          <th><p>{ oferta.horas + ' horas' }</p></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p>{ oferta.salarioAnual }</p></td>
          <td><p>{ oferta.modalidadTrabajo }</p></td>
          <td><p>{ oferta.sector }</p></td>
        </tr>
      </tbody>
    </table>
  )
}
