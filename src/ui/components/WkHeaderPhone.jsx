import { Link } from 'react-router-dom'
import { Logo, WkHeaderLogin } from './'
import { useState } from 'react'

import '../styles/wkHeaderPhone.css'

export const WkHeaderPhone = () => {

    const [isOpen,setOpen] = useState(false);
    const openMenu = () => {
        setOpen(true);
        document.getElementById('menuDesplegable').style.width = '100%'
    }
    const closeMenu = () => {
        setOpen(false);
        document.getElementById('menuDesplegable').style.width = '0%'   
    }

    return (
        <header className='wk-header-phone wk-header'>
            <Logo/>
            <WkHeaderLogin/>
            <img src='/images/ui/barras3.png' onClick={openMenu} alt='menu' className='boton-heading-desplegable'/>
            <div id='menuDesplegable'>
                <img src="/images/ui/cerrar.png" alt="close" onClick={ closeMenu } />
                <Link to={'/miPerfil/'}>Mi Perfil</Link>
                <Link to={'/'}>Inicio</Link>
                <Link to={'/ofertasDeTrabajo/?numberPage=0'}>Ofertas</Link>
                <Link to={'/misOfertas/'}>Contratar</Link>
            </div>
        </header>
    )
}


