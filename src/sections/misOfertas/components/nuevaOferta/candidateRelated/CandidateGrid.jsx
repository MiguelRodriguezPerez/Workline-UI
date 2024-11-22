import { useContext } from "react"
import { CandidateCard } from "./CandidateCard"
import { VerOfertaContext } from "../../../context"

export const CandidateGrid = () => {

  const { oferta : { listaCandidatos } } = useContext(VerOfertaContext)

  return (
    <ul>
        {
            listaCandidatos.length > 0 &&
            listaCandidatos.map(candidato => <CandidateCard candidato={candidato}/>)
        }
    </ul>
  )
}
