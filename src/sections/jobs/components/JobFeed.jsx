import { useEffect, useState } from 'react';
import { getCurrentPage } from '../helpers/getCurrentPage';
import { getOffers } from '../helpers/getOffers';
import { JobCard } from './JobCard';

export const JobFeed = () => {

    const [ ofertas, setOfertas ] = useState([]);
    const [ totalPaginas, setTotalPaginas] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
          const resultados = await getOffers(getCurrentPage(window.location.pathname),null);
          setOfertas(resultados.content);
          setTotalPaginas(resultados.totalPages);
        };
    
        fetchData();
      }, []);

    return (
        <ul>
          {ofertas.map( (oferta) => <JobCard key={oferta.id} oferta={oferta}/>)}
        </ul>      
    )
}
