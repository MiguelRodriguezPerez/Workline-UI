import {borrarOferta } from '/src/global/api/seccionContrata'

import '../../styles/ofertaCardHeading.css'
import { CandidateCounter } from './CandidateCounter'

export const OfertaCardHeading = ({oferta = {}}) => {

    console.log(oferta)

    const redirectDelete = () => {
        borrarOferta(oferta.id);
        window.location.reload();
    }

    return (
    <section className='card-heading'>
        <h4>{oferta.puesto}</h4>
        <CandidateCounter id={oferta.id}/>
        <img src="/images/misOfertas/borrar.png" alt="borrar.png" onClick={redirectDelete} />
    </section>
    )
}
