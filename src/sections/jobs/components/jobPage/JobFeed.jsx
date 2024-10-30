import { useContext } from 'react';
import { JobContext } from '../../context/jobPage/JobContext';
import { JobCard } from './JobCard';
import '../../styles/jobPage/jobFeed.css'
import { useNavigate } from 'react-router';


export const JobFeed = () => {

    const { jobPageState } = useContext( JobContext );
    const listaOfertas = jobPageState.content;
    const navigate = useNavigate();

    return (
        <ul className='job-feed'>
          {
            listaOfertas?.map( (oferta) => <JobCard key={ oferta.id } oferta={ oferta } />)
          }
        </ul>      
    )
}
