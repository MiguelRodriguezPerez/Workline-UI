import { useContext } from 'react';
import { JobContext } from '../context/JobContext';
import { JobCard } from './JobCard';
import '../styles/jobFeed.css'


export const JobFeed = () => {

    const { jobPageState } = useContext( JobContext );
    const listaOfertas = jobPageState.content;

    return (
        <ul className='job-feed'>
          {
            listaOfertas?.map( (oferta) => <JobCard key={oferta.id} oferta={oferta}/>)
          }
        </ul>      
    )
}
