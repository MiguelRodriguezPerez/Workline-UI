import { Link } from "react-router-dom"

export const LoginHeaderWrapper = () => {

    
  return (
    <div className='header-login'>

        <Link to={'/login'}>Iniciar sesión</Link>
        <img src="/images/ui/userLogin.png"></img>
    </div>
  )
}
