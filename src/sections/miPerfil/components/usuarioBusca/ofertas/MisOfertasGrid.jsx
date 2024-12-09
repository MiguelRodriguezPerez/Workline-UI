import { useEffect, useState } from "react";
import { obtenerMisInscripciones } from "../../../../../global/api/seccionBusca";
import { JobCard } from "../../../../jobs/components/jobPage/JobCard";

import '../../../styles/seccionBusca/entidadGrid.css';
import { NoOfertasInscrito } from "./NoOfertasInscrito";

export const MisOfertasGrid = () => {

    const [ listaOfertas, setListaOfertas ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const effectWrapper = async() => {
        const resultado = await obtenerMisInscripciones();
        if(resultado.status === 200) {
            setListaOfertas(resultado.data);
            setIsLoading(false);
        }
        else setIsLoading(false);
    }

    useEffect(() =>{
        effectWrapper();
    },[])

    if(!isLoading) return (
        <section className="grid-entidad">
            <h3>Mis ofertas</h3>
            <ul className="lista-elementos">
            {
                listaOfertas?.length > 0 ?
                listaOfertas.map( (oferta) => <JobCard key={ oferta.id } oferta={ oferta } />)
                :
                <NoOfertasInscrito/>
            }
            </ul> 
        </section>     
    )
}
