import { borrarOferta } from '/src/global/api/seccionContrata'

import '../../styles/ofertaCardHeading.css'
import { CandidateCounter } from '../nuevaOferta/candidateRelated/CandidateCounter'

export const OfertaCardHeading = ({oferta = {}}) => {

    const redirectDelete = () => {
        borrarOferta(oferta.id);
        window.location.reload();
    }

    return (
    <section className='card-heading'>
        <h4>{oferta.puesto}</h4>
        <CandidateCounter num={oferta.listaCandidatos.length}/>
        <img src="/images/misOfertas/borrar.png" alt="borrar.png" onClick={redirectDelete} />
    </section>
    )
}
