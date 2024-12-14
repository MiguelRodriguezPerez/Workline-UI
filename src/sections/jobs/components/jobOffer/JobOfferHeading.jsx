import { useContext } from 'react'
import { JobOfferContext } from '../../context/jobOffer/jobOfferContext'

import '../../styles/jobOffer/jobOfferHeading.css';
import { ButtonInscribe } from './ButtonInscribe';
import { convertirFechaCliente } from '../../../../global/helpers/fechas';

export const JobOfferHeading = () => {

  const oferta = useContext( JobOfferContext );
  
  return (
    <section className='offer-heading'>
        <p>{oferta.puesto}</p>
        <p>{convertirFechaCliente(oferta.fechaPublicacion)}</p>
        <p>{oferta.nombreEmpresa}</p>
        <ButtonInscribe/>
    </section>
  )
}
