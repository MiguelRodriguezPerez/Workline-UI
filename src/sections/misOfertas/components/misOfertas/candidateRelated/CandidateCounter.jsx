
import { useEffect, useState } from 'react';


import '../../../styles/candidateRelated/candidateCounter.css';

export const CandidateCounter = ({ numCandidatosProp = 0 }) => {
  
  return (
    <div className="candidate-counter">
        {
            numCandidatosProp > 0 &&
            <>
                <h4>{numCandidatosProp}</h4>
                <img src="/images/seccionContrata/candidato.png" alt="candidato.png" />
            </>
        }
    </div>
  )
}
