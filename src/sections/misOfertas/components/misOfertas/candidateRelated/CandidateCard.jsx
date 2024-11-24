import { useNavigate } from 'react-router'

import '../../../styles/candidateRelated/candidateCard.css'

export const CandidateCard = ({candidato}) => {

    const navigate = useNavigate();
    const redirect = () => {
        navigate(`/misOfertas/verCandidato/${candidato.nombre}`);
    }

    return (
        <li className='candidate-li' onClick={redirect}>
            <h3>{candidato.nombre}</h3>
            <ul>
                <li>{candidato.telefono}</li>
                <li>{candidato.email}</li>
                <li>{candidato.ciudad}</li>
            </ul>
        </li>
    )
}
