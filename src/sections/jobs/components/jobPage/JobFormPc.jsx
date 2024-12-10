import { useContext } from 'react';
import { JobFormBase } from './';
import { JobContext } from '../../context/jobPage/JobContext';

export const JobFormPc = () => {

  const { isLoading } = useContext(JobContext);
    
  return (
    <aside className='job-search-aside'>
        <JobFormBase/>
    </aside>
    )
}
