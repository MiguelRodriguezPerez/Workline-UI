import React, { useEffect, useState } from 'react'
import { getOffers } from '../helpers/getOffers';
import { JobCard } from './JobCard';

export const JobFeed = () => {

    const [ ofertas, setOfertas ] = useState([]);
    console.log(ofertas)

    useEffect(() => {
        const fetchData = async () => {
          const resultados = await getOffers();
          setOfertas(resultados);
        };
    
        fetchData();
      }, []);

    return (
        <ul>
          {ofertas.map( (oferta) => <JobCard oferta={oferta}/>)}
        </ul>
        
    )
}
