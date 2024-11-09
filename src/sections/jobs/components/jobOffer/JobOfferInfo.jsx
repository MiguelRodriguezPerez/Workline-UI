import { useContext } from 'react'
import { JobOfferContext } from '../../context/jobOffer/jobOfferContext'
import { getViewString } from '../../../../global/helpers/getViewString'

import '../../styles/jobOffer/jobOfferInfo.css'

export const JobOfferInfo = () => {

  const oferta = useContext(JobOfferContext);

  return (
    <section className='nube offer-info'>
      <p>{ oferta.ciudad }</p>
      <p>{ getViewString(oferta.tipoContrato) }</p>
      <p>{ oferta.horas + ' horas' }</p>
      <p>{ oferta.salarioAnual + ' €' }</p>
      <p>{ getViewString(oferta.modalidadTrabajo) }</p>
      <p>{ oferta.sector }</p>
    </section>
  )
}
