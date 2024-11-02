import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { uploadLogin } from '../helpers/uploadLogin';
import '../styles/loginForm.css';
import { uploadLogout } from '../helpers/uploadLogout';


export const LoginForm = () => {

    const navigate = useNavigate();

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

    const submitLogin = ( event ) => {
        event.preventDefault();
        console.log(user);
        uploadLogin(user);
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
        
            <button onClick={ submitLogin }>Iniciar Sesión</button>
            <button>¿No tiene cuenta? Cree una</button>

            <Link onClick={ () => { navigate(-1) } }>Volver atrás</Link>
            <button onClick={ uploadLogout }>Salir o algo</button>
        </form>
    )
}
