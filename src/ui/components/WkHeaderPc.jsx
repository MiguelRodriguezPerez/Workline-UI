import { Link } from 'react-router-dom'
import '../styles/wkHeaderPc.css'
import '../styles/logo.css'
import { Logo } from './Logo'

export const WkHeaderPC = () => {
  return (
    <header className='wk-header-pc wk-header'>
      <Logo/>
      <div className='header-sections'>
        <Link to={'/'}>Inicio</Link>
        <Link to={'/ofertasDeTrabajo/?numberPage=0'}>Ofertas</Link>
        <Link>Contratar</Link>
      </div>
      <div className='header-login'>
        <Link to={'/login'}>Iniciar sesión</Link>
      </div>
    </header>
  )
}

