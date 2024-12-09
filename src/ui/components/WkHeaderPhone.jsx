import { Link } from 'react-router-dom'
import { Logo, WkHeaderLogin } from './'
import { useState } from 'react'

import '../styles/wkHeaderPhone.css'
import { useMenuDesplegable } from '../../global/hooks'

export const WkHeaderPhone = () => {

    const { openMenu, closeMenu } = useMenuDesplegable('menuDesplegable');

    return (
        <header className='wk-header-phone wk-header'>
            <Logo/>
            <WkHeaderLogin/>
            <img src='/images/ui/barras3.png' onClick={openMenu} alt='menu' className='boton-heading-desplegable'/>
            <div id='menuDesplegable'>
                <img src="/images/ui/cerrar.png" alt="close" onClick={ closeMenu } />
                <Link to={'/miPerfil/misDatos'}>Mi Perfil</Link>
                <Link to={'/'}>Inicio</Link>
                <Link to={'/ofertasDeTrabajo/?numberPage=0'}>Ofertas</Link>
                <Link to={'/misOfertas/'}>Contratar</Link>
            </div>
        </header>
    )
}


