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
        <Link>Inicio</Link>
        <Link>Encontrar trabajo</Link>
      </div>
      <div>
        <Link>Mi perfil</Link>
        <Link>Crear cuenta</Link>
      </div>
    </footer>
  )
}

