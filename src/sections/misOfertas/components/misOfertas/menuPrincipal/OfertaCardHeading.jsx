import { CandidateCounter } from '../candidateRelated/CandidateCounter';
import { BorrarOfertaIcon } from './BorrarOfertaIcon';

import '../../../styles/ofertaCardHeading.css';

export const OfertaCardHeading = ({ oferta = {} }) => {
    console.log(oferta.listaCandidatos.length);
    
    return (
        <section className='card-heading'>
            <h4>{oferta.puesto}</h4>
            <CandidateCounter numCandidatosProp={oferta.listaCandidatos.length}/>
            <BorrarOfertaIcon id={oferta.id}/>
        </section>
    )
}
