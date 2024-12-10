import { useContext } from 'react';
import { JobContext } from '../../context/jobPage/JobContext';
import { JobCard } from './JobCard';
import { NoJobResults } from './NoJobResults';

import '../../styles/jobPage/jobFeed.css';


export const JobFeed = () => {

    const { jobPageState, isLoading } = useContext( JobContext );
    const listaOfertas = jobPageState.content;

    if(isLoading){
      return <ul className='job-feed'>Cargando....</ul>
    }

    if(!isLoading) return (
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
