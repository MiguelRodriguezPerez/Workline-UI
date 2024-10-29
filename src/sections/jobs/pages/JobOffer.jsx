import queryString from "query-string"
import { getOfertaById } from "../../../global/helpers"

export const JobOffer = () => {

    // const params = queryString.parse(location)
    const defUrl = location.pathname.toString().substring(25, location.pathname.length)
    //awaiteala o algo
    const oferta = getOfertaById(defUrl);
    

  return (
    <>

    </>
    
  )
}
