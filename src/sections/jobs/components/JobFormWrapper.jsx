import { useEffect, useState } from 'react';
import { JobFormPc,  JobFormPhone } from '../components'
export const JobFormWrapper = () => {

    const [isPc, setIsPc] = useState(window.innerWidth > 1600);

    const checkIfPc = () => {
        setIsPc(window.innerWidth > 1600);
    }

    useEffect( () => {
        window.addEventListener('resize' , checkIfPc );
    },[ window.innerWidth ])

  return (
    <>  
        {
            isPc ? <JobFormPc/> : <JobFormPhone/>
        }
    </>
   
  )
}
