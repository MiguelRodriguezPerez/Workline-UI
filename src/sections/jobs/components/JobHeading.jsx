import { useContext } from "react";

import { JobContext } from "../context/JobContext";


export const JobHeading = () => {

  const { jobPageState } = useContext(JobContext);
  const pagina = jobPageState[0]

    return (
        <h3>{pagina.totalElements} ofertas disponibles</h3>
  )
}

