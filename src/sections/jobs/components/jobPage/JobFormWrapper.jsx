import { useContext, useEffect, useState } from 'react';
import { JobFormPc,  JobFormPhone } from '../../components/jobPage'
import { JobContext } from '../../context/jobPage/JobContext';
export const JobFormWrapper = () => {

    const [isPc, setIsPc] = useState(window.innerWidth > 1600);
    const { isLoading } = useContext(JobContext);

    const checkIfPc = () => {
        setIsPc(window.innerWidth > 1600);
        //Esto es por si quitas cambias la vista del inspector en medio de la exposición
        if(isPc) document.body.classList.remove("remove-scrolling"); 

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
