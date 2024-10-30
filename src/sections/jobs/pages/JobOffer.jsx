import { useEffect, useState } from "react"
import { getOfertaById } from "../../../global/helpers"
import { WkFooter } from '../../../ui/components/WkFooter'
import { WkHeader } from '../../../ui/components/WkHeader'
import { JobButtonBack, JobOfferDescription, JobOfferHeading, JobOfferInfo, JobOfferRequirements } from "../components/jobOffer/"
import { JobOfferProvider } from "../context/jobOffer/JobOfferProvider"

import '../styles/jobOffer/jobOfferPage.css';


export const JobOffer = () => {

  const [oferta, setOferta] = useState({}); 
  const defUrl = location.pathname.substring(25);

  useEffect(() => {
    const requerirOferta = async (url) => {
      const resultado = await getOfertaById(url);
      setOferta(resultado);
    };

    requerirOferta(defUrl); 
  }, []);

  return (
    <>
      <WkHeader/>
        <JobOfferProvider oferta={ oferta }>
          <section className="job-offer-page">
            <JobButtonBack/>
            <JobOfferHeading/>
            <JobOfferInfo/>
            <JobOfferDescription/>
            <JobOfferRequirements/>
          </section>
        </JobOfferProvider>
      <WkFooter/>
    </>
  )
}
