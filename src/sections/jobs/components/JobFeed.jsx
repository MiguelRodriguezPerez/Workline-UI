import { useContext } from 'react';
import { JobContext } from '../context/JobContext';
import { JobCard } from './JobCard';


export const JobFeed = () => {

    const {jobPageState} = useContext( JobContext );
    const pagina = jobPageState[0];

    return (
        <ul>
          {
            pagina.content?.map( (oferta) => <JobCard key={oferta.id} oferta={oferta}/>)
          }
        </ul>      
    )
}
