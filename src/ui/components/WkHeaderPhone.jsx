import { Link } from 'react-router-dom'
import '../styles/wkHeaderPhone.css'
import { Logo } from './Logo'
import { useState } from 'react'
import { WkHeaderLogin } from './WkHeaderLogin'

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
            <div id='menuDesplegable'>
                <img src="/images/ui/cerrar.png" alt="close" onClick={ closeMenu } />
                <Link to={'/'}>Inicio</Link>
                <Link to={'/ofertasDeTrabajo/?numberPage=0'}>Ofertas</Link>
                <Link>Contratar</Link>
            </div>
            <div id='header-second-child'>
                <WkHeaderLogin/>
                <img src='/images/ui/barras3.png' onClick={openMenu} alt='menu'/>
                
            </div>
            
        </header>
    )
}


