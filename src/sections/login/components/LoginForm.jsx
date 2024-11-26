import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../global/context/AuthContext';
import { uploadLogin } from '../helpers/uploadLogin';
import '../styles/loginForm.css';


export const LoginForm = () => {

    const navigate = useNavigate();
    const { updateUser, resetUser } = useContext(AuthContext);
  
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
        else document.getElementById('mensaje-error').removeAttribute('hidden');

    }

    const goBackEvent = (event) => {
        event.preventDefault();
        navigate(-1);
    }

    const goNewAccount = (event) => {
        event.preventDefault();
        navigate('/nuevaCuenta/primeraParte');
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

            <p hidden className='login-error' id='mensaje-error'>Nombre de usuario o contraseña incorrectos</p>
        
            <button onClick={ submitLogin }>Iniciar Sesión</button>
            <button onClick={ goNewAccount }>¿No tiene cuenta? Cree una</button>

            <a onClick={ goBackEvent }>Volver atrás</a>
        </form>
    )
}
