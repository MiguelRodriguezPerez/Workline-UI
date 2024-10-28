import { useContext } from "react";

import { JobContext } from "../context/JobContext";


export const JobHeading = () => {

  const { jobPageState } = useContext(JobContext);
  const numOfertas = jobPageState.totalElements

    return (
        <h3>{numOfertas} ofertas disponibles</h3>
  )
}

