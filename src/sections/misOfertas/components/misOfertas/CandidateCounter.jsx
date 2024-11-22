import { getListaCandidatos } from '/src/global/api/seccionContrata'
import { useEffect, useState } from 'react';

import '../../styles/candidateCounter.css'

export const CandidateCounter = ({id}) => {

  const [candidateCount, setCandidateCount] = useState(0);

  useEffect(() => {
    const effectWrapper = async () => {
      const totalCandidatos = await getListaCandidatos(id);
      setCandidateCount(totalCandidatos.data.length)
    }
    effectWrapper();
  }, [id])
  
  console.log(candidateCount)

  return (
    <div className="candidate-counter">
        {
            candidateCount > 0 &&
            <>
                <h4>{candidateCount}</h4>
                <img src="/images/seccionContrata/candidato.png" alt="candidato.png" />
            </>
        }
    </div>
  )
}
