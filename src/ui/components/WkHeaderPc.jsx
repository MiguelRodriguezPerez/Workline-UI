import { Link } from 'react-router-dom'
import '../styles/wkHeaderPc.css'
import '../styles/logo.css'
import { Logo } from './Logo'
import { WkHeaderLogin } from './WkHeaderLogin'

export const WkHeaderPC = () => {

  return (
    <header className='wk-header-pc wk-header'>
      <Logo/>
      <div className='header-sections'>
        <Link to={'/'}>Inicio</Link>
        <Link to={'/ofertasDeTrabajo/?numberPage=0'}>Ofertas</Link>
        <Link to={'/misOfertas/'}>Contratar</Link>
      </div>
      <WkHeaderLogin/>
    </header>
  )
}

