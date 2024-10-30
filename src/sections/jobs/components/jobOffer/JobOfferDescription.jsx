import { useContext } from "react";
import { JobOfferContext } from "../../context/jobOffer/jobOfferContext";

import '../../styles/jobOffer/jobOfferDescription.css';

export const JobOfferDescription = () => {

  const oferta = useContext( JobOfferContext );

  return (
    <section className="offer-description nube">
      <h3>Descripción</h3>
      <p>{oferta.descripcion}</p>
    </section>
  )
}
