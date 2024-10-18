import { Link } from 'react-router-dom'
import '../styles/wkHeaderPhone.css'
import { Logo } from './Logo'
import { useState } from 'react'

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
        <header className='wk-header-phone'>
            <Logo/>
            <div id='menuDesplegable'>
                    <img src="/public/images/ui/cerrar.png" alt="close" onClick={closeMenu} />
                    <Link>Mi cuenta</Link>
                    <Link>Inicio</Link>
                    <Link>Ofertas</Link>
                    <Link>Contratar</Link>
                </div>
            <img src='/public/images/ui/barras3.png' onClick={openMenu} alt='menu'/>
        </header>
    )
}


