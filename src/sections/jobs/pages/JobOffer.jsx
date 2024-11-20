import { useEffect, useState } from "react"
import { obtenerOfertaPorId } from "../api"
import { WkFooter } from '../../../ui/components/WkFooter'
import { JobButtonBack, JobOfferDescription, JobOfferHeading, JobOfferInfo, JobOfferRequirements } from "../components/jobOffer/"
import { JobOfferProvider } from "../context/jobOffer/JobOfferProvider"
import { WkHeaderWrapper } from "../../../ui/components/WkHeaderWrapper"

import '../styles/jobOffer/jobOfferPage.css'
import { useNavigate } from "react-router"


export const JobOffer = () => {

  const [oferta, setOferta] = useState({}); 
  const defUrl = location.pathname.substring(25);
  const navigate = useNavigate();

  useEffect(() => {
    const requerirOferta = async (url) => {
      const resultado = await obtenerOfertaPorId(url);

      if(resultado.status === 200) setOferta(resultado.data);
      else navigate(-1);
    };

    requerirOferta(defUrl); 
  }, []);

  return (
    <>
      <WkHeaderWrapper/>
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
