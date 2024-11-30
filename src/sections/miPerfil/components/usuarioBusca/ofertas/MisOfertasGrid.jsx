import { useEffect, useState } from "react";
import { obtenerMisInscripciones } from "../../../../../global/api/seccionBusca";
import { JobCard } from "../../../../jobs/components/jobPage/JobCard";

import '../../../styles/seccionBusca/entidadGrid.css';

export const MisOfertasGrid = () => {

    const [listaOfertas, setListaOfertas] = useState([]);
    const effectWrapper = async() => {
        const resultado = await obtenerMisInscripciones();
        if(resultado.status === 200) setListaOfertas(resultado.data);
    }

    useEffect(() =>{
        effectWrapper();
    },[])

    return (
        <section className="grid-entidad">
            <h3>Mis ofertas</h3>
            <ul className="lista-elementos">
            {
                listaOfertas?.map( (oferta) => <JobCard key={ oferta.id } oferta={ oferta } />)
            }
            </ul> 
        </section>     
    )
}
