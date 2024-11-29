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
        <Link to={'/miPerfil/'}>Mi perfil</Link>
        <Link to={'nuevaCuenta/primeraParte'}>Crear cuenta</Link>
      </div>
    </footer>
  )
}

