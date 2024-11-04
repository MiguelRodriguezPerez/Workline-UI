import { Link } from 'react-router-dom'
import '../styles/wkHeaderPc.css'
import '../styles/logo.css'
import { Logo } from './Logo'
import { useContext } from 'react'
import { AuthContext } from '../../global/context/AuthContext'

export const WkHeaderPC = () => {

  const { user } = useContext(AuthContext);

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
        {user && <p>{JSON.stringify(user)}</p>}
      </div>
    </header>
  )
}

