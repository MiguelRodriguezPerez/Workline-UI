import { useContext } from 'react';
import { JobContext } from '../context/JobContext';
import { JobCard } from './JobCard';


export const JobFeed = () => {

    const { jobPageState } = useContext( JobContext );
    const listaOfertas = jobPageState.content;

    return (
        <ul>
          {
            listaOfertas?.map( (oferta) => <JobCard key={oferta.id} oferta={oferta}/>)
          }
        </ul>      
    )
}
