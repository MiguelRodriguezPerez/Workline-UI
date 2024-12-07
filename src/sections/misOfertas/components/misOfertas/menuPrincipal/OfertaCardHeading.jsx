import { CandidateCounter } from '../candidateRelated/CandidateCounter';
import { BorrarOfertaIcon } from './BorrarOfertaIcon';

import '../../../styles/ofertaCardHeading.css';

export const OfertaCardHeading = ({ oferta = {} }) => {



    return (
        <section className='card-heading'>
            <h4>{oferta.puesto}</h4>
            <CandidateCounter id={oferta.id}/>
            <BorrarOfertaIcon id={oferta.id}/>
        </section>
    )
}
