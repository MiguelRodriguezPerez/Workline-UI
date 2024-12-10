import { JobFormBase } from './JobFormBase'
import { useEffect, useState } from 'react';

import '../../styles/jobPage/jobSearchFormPhone.css'

export const JobFormPhone = () => {

    const [ isOpen, setOpen ] = useState(false);
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

    /*Si el id del elemento en el que el usuario hizo click es form-desplegable (el fondo negro
    semitransparente del formulario) se cerrará el menú pero si hizo clic en otro*/
    const closeMenuChecked = ({ target }) => {
        if(target.id === 'form-desplegable') closeMenu();
    }

    /*Este efecto sirve para bloquear la cabecera del teléfono*/
    useEffect(() => {
        const cabeceraPhone = document.getElementsByClassName('wk-header-phone')[0];
        isOpen ? 
            cabeceraPhone.classList.add('disable-header-events')
            :
            cabeceraPhone.classList.remove('disable-header-events')
    },[isOpen])

  return (
    <>
        <button className='job-phone-button green-button' onClick={openMenu}>
            <img src="/images/jobs/lupa.png" alt="" />
            <p>Más filtros</p>
        </button>
        <div id='form-desplegable' onClick={closeMenuChecked}>
            <JobFormBase closeMenu={closeMenu}/>
        </div>
    </>
  )
}
