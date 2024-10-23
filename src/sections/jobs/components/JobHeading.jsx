import { useContext } from "react";

import { JobContext } from "../context/JobContext";


export const JobHeading = () => {

  const { jobPageState } = useContext(JobContext);

    return (
        <h3>{ jobPageState.totalElements} ofertas disponibles</h3>
  )
}

