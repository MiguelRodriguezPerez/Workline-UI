import { useContext } from 'react';
import { JobContext } from '../../context/jobPage/JobContext';
import '../../styles/jobPage/jobFeed.css';
import { JobCard } from './JobCard';


export const JobFeed = () => {

    const { jobPageState } = useContext( JobContext );
    const listaOfertas = jobPageState.content;

    return (
        <ul className='job-feed'>
          {
            listaOfertas?.map( (oferta) => <JobCard key={ oferta.id } oferta={ oferta } />)
          }
        </ul>      
    )
}
