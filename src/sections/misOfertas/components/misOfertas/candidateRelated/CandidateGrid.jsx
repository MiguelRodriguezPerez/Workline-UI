import { useEffect, useState } from "react";
import { CandidateCard } from "./CandidateCard";
import { getListaCandidatos } from '/src/global/api/seccionContrata'

import '../../../styles/candidateRelated/candidateGrid.css'

export const CandidateGrid = () => {

  const id = parseInt(location.pathname.substring(22));
  const [listaCandidatos, setListaCandidatos] = useState([]);
  const [isResolved, setIsResolved] = useState(false);

  const effectWrapper = async() => {
    const resultado = await getListaCandidatos(id);
    if(resultado.status == 200) setListaCandidatos(resultado.data);
    setIsResolved(true);
  } 

  useEffect(() => {
    effectWrapper();
  },[id]);

  return (
    isResolved && 
    listaCandidatos.length > 0 && (
      <>
        <h3 className="candidate-grid-h3">Lista candidatos</h3>
        <ul className="candidate-grid">
          {
            listaCandidatos.map(candidato => 
              <CandidateCard key={candidato.id} candidato={candidato} />
            )
          }
        </ul>
      </>
    )
  )
}