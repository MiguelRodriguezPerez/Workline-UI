import { useContext } from "react";
import { JobOfferContext } from "../../context/jobOffer/jobOfferContext";

export const JobOfferDescription = () => {

  const oferta = useContext( JobOfferContext );

  return (
    <div className="offer-description">JobOfferDescription</div>
  )
}
