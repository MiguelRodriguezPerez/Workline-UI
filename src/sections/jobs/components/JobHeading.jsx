import { useContext } from "react";

import { JobContext } from "../context/JobContext";
import '../styles/jobHeading.css'

export const JobHeading = () => {

  const { jobPageState } = useContext(JobContext);
  const numOfertas = jobPageState.totalElements

    return (
        <h3 className="job-heading">{numOfertas} ofertas disponibles</h3>
  )
}

