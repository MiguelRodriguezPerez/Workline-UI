import { JobFormBase } from './JobFormBase'
import { useState } from 'react';

import '../../styles/jobPage/jobSearchFormPhone.css'

export const JobFormPhone = () => {

    const [isOpen,setOpen] = useState(false);
    const openMenu = () => {
        setOpen(true);
        document.getElementById('form-desplegable').style.height = '100vh'
        document.body.classList.add("remove-scrolling"); 
    }
    const closeMenu = () => {
        setOpen(false);
        document.getElementById('form-desplegable').style.height = '0vh'
        document.body.classList.remove("remove-scrolling"); 
    }

  return (
    <div>
        <button className='job-phone-button green-button' onClick={openMenu}>
            <img src="/images/jobs/lupa.png" alt="" />
            <p>Más filtros</p>
        </button>
        <div id='form-desplegable'>
            <JobFormBase closeMenu = {closeMenu}/>
        </div>
    </div>
  )
}
