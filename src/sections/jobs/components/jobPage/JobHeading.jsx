import { useContext } from "react";

import { JobContext } from "../../context/jobPage/JobContext";
import '../../styles/jobPage/jobHeading.css'

export const JobHeading = () => {

  const { jobPageState, isLoading } = useContext(JobContext);
  const numOfertas = jobPageState.totalElements;

    if(isLoading) return <h3 className="job-heading">Cargando...</h3>

    if(!isLoading) return (
        <h3 className="job-heading">{numOfertas} ofertas disponibles</h3>
  )
}

