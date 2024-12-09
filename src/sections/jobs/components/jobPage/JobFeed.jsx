import { useContext } from 'react';
import { JobContext } from '../../context/jobPage/JobContext';
import '../../styles/jobPage/jobFeed.css';
import { JobCard } from './JobCard';
import { NoJobResults } from './NoJobResults';


export const JobFeed = () => {

    const { jobPageState } = useContext( JobContext );
    const listaOfertas = jobPageState.content;

    return (
        <ul className='job-feed'>
          {
            listaOfertas.length > 0 ? 
            listaOfertas.map( (oferta) => <JobCard key={ oferta.id } oferta={ oferta } />)
            :
            <NoJobResults/>
          }
        </ul>      
    )
}
