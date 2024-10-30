import { useContext } from "react";

import { JobContext } from "../../context/jobPage/JobContext";
import '../../styles/jobPage/jobHeading.css'

export const JobHeading = () => {

  const { jobPageState } = useContext(JobContext);
  const numOfertas = jobPageState.totalElements

    return (
        <h3 className="job-heading">{numOfertas} ofertas disponibles</h3>
  )
}

