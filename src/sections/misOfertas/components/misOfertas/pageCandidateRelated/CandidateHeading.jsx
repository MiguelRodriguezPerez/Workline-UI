import { useContext } from "react"
import { VerCandidatoContext } from "../../../context/verCandidato/VerCandidatoContext"
import { useNavigate } from "react-router"

import '../../../styles/pageCandidateRelated/candidateHeading.css'
import '/src/global/styles/formularios.css'


export const CandidateHeading = () => {

    const { candidato } = useContext(VerCandidatoContext);
    const navigate = useNavigate();
    const goBack = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <>
            <a onClick={goBack} className="heading-link">Volver atrás</a>
            <section className="candidate-heading nube">
                <div>
                    <h3>{candidato.nombre}</h3>
                    <p>{candidato.ciudad}</p>
                </div>
                <p>{candidato.email}</p>
                <p>{candidato.telefono}</p>
            </section>
        </>
    )
}
