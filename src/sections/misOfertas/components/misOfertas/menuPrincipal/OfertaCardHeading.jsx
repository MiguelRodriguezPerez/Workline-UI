import { borrarOferta } from '/src/global/api/seccionContrata'
import { CandidateCounter } from '../candidateRelated/CandidateCounter'
import { useContext, useEffect, useState } from 'react';
import { MisOfertasContext } from '../../../context';

import '../../../styles/ofertaCardHeading.css'
import { BorrarOfertaIcon } from './BorrarOfertaIcon';


export const OfertaCardHeading = ({ oferta = {} }) => {

    const { servirPagina, pagina: { totalPages } } = useContext(MisOfertasContext);
    const [pageCount, setPageCount] = useState(totalPages);

    useEffect(() => {
        setPageCount(totalPages);
    }, [totalPages]);

    return (
        <section className='card-heading'>
            <h4>{oferta.puesto}</h4>
            <CandidateCounter id={oferta.id}/>
            <BorrarOfertaIcon id={oferta.id}/>
        </section>
    )
}
