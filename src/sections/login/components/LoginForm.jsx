import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { uploadLogout } from '../helpers/uploadLogout';
import '../styles/loginForm.css';
import { useContext } from 'react';
import { AuthContext } from '../../../global/context/AuthContext';
import { uploadLogin } from '../helpers/uploadLogin';


export const LoginForm = () => {

    const navigate = useNavigate();
    const { updateUser,resetUser } = useContext(AuthContext);
  
    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const inputChange = ( { target } ) => {
        setUser({
            ...user,
            [target.name]:target.value,
        });
    }

    const submitLogin = async(event) => {
        event.preventDefault();
        const loggedUser = await uploadLogin(user);
        if(loggedUser){
            updateUser(loggedUser);
            navigate( -1 );
        }
        else throw new Error('AAAAAAAAAA')
    }

    const logoutWrapper = async(event) => {
        event.preventDefault();
        uploadLogout();
        resetUser();
    }
    

    return (
        <form className='login-form'>
            <section className='login-input'>
                <img src="/images/login/usuario.png" alt="user.png"/>
                <input type="text" name="username" onInput={ inputChange } placeholder="Nombre de usuario"/>
            </section>

            <section className='login-input'>
                <img src="/images/login/candado.png" alt=""/>
                <input type="password" name="password" onInput={ inputChange } placeholder="Contraseña"/>
            </section>

            <p hidden className='login-error'>Nombre de usuario o contraseña incorrectos</p>
        
            <button onClick={ submitLogin }>Iniciar Sesión</button>
            <button onClick={logoutWrapper}>AAAAAAAAAAA</button>
            <button>¿No tiene cuenta? Cree una</button>

            <Link onClick={ () => { navigate(-1) } }>Volver atrás</Link>
        </form>
    )
}
