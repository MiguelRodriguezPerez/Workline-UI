
import { useEffect, useState } from 'react';
import { getNumeroCandidatos } from '../../../../../global/api/seccionContrata';

import '../../../styles/candidateRelated/candidateCounter.css';

export const CandidateCounter = ({id = 0}) => {

  const [ numCandidatos, setNumCandidatos ] = useState(0);
  const [ isResolved, setIsResolved ] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      const resultado = await getNumeroCandidatos(id);
      console.log(resultado.data)
      if(resultado.status === 200) setNumCandidatos(resultado.data);
      setIsResolved(true);
    }
    fetchData();
  }, [id])

  return (
    <div className="candidate-counter">
        {
            isResolved && numCandidatos > 0 &&
            <>
                <h4>{numCandidatos}</h4>
                <img src="/images/seccionContrata/candidato.png" alt="candidato.png" />
            </>
        }
    </div>
  )
}
