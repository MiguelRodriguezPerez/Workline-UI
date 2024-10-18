import { Link } from 'react-router-dom'
import '../styles/wkHeaderPc.css'
import '../styles/logo.css'
import { Logo } from './Logo'

export const WkHeaderPC = () => {
  return (
    <header className='wk-header-pc'>
      <Logo/>
      <div className='header-sections'>
        <Link>Inicio</Link>
        <Link>Ofertas</Link>
        <Link>Contratar</Link>
      </div>
      <div className='header-login'>
        <Link>Iniciar sesión</Link>
      </div>
    </header>
  )
}

