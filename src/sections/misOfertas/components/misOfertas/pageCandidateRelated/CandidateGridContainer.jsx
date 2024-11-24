import { CandidateGrid } from "./CandidateGrid"

import '../../../styles/pageCandidateRelated/candidateGridContainer.css'

export const CandidateGridContainer = () => {
  return (
    <section className="candidate-grid-container">
        <CandidateGrid entidad='conocimiento'/>
        <CandidateGrid entidad='experiencia'/>
    </section>
  )
}
