import { Link, useNavigate } from 'react-router-dom'
import '../styles/loginForm.css'
import { useState } from 'react';
import { uploadLogin } from '../helpers/uploadLogin';

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
    
    const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');

    const submitLogin = ( event ) => {
        event.preventDefault();
        console.log(user);
        uploadLogin(user, csrfToken)
    }

    

    return (
        <form className='login-form'>

            <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}"/>

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
        </form>
    )
}
