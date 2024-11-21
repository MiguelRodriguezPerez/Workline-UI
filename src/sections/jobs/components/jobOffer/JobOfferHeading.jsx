import { useContext } from 'react'
import { JobOfferContext } from '../../context/jobOffer/jobOfferContext'

import '../../styles/jobOffer/jobOfferHeading.css';
import { ButtonInscribe } from './ButtonInscribe';

export const JobOfferHeading = () => {

  const oferta = useContext( JobOfferContext );
  
  return (
    <section className='offer-heading'>
        <p>{oferta.puesto}</p>
        <p>{oferta.fechaPublicacion}</p>
        <p>{oferta.nombreEmpresa}</p>
        <ButtonInscribe/>
    </section>
  )
}
