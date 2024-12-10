import { Link, useNavigate } from "react-router-dom"
import '../styles/wkFooter.css'

export const WkFooter = () => {

    const navigate = useNavigate();
    const onRedirectHome = () =>{
        navigate('/');
    }

  return (
    <footer className='wk-footer'>
      <img src="/images/ui/wkFooter.png" alt="logo" onClick={onRedirectHome}/>
      <div>
        <Link to={'/'}>Inicio</Link>
        <Link to={'/ofertasDeTrabajo/?numberPage=0'}>Encontrar trabajo</Link>
      </div>
      <div>
        <Link to={'/miPerfil/misDatos'}>Mi perfil</Link>
        <Link to={'/misOfertas/0'}>Mis ofertas</Link>
      </div>
    </footer>
  )
}

