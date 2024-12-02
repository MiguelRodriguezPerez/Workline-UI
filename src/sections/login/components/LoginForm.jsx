import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../global/context/AuthContext';
import { PasswordEye } from '../../../ui/components/forms/PasswordEye';
import { uploadLogin } from '../helpers/uploadLogin';
import { useForm } from 'react-hook-form';

import '../styles/loginForm.css';
import '/src/global/styles/elementos.css';
import '/src/global/styles/formularios.css';



export const LoginForm = () => {

    const {register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { updateUser, resetUser } = useContext(AuthContext);


    const goBackEvent = (event) => {
        event.preventDefault();
        navigate('/');
    }

    const goNewAccount = (event) => {
        event.preventDefault();
        navigate('/nuevaCuenta/primeraParte');
    }

    const submitLogin = async(data) => {
        const loggedUser = await uploadLogin(data);

        if(loggedUser){
            updateUser(loggedUser);
            navigate('/');
        }
        else document.getElementById('mensaje-error').removeAttribute('hidden');
    }

    return (
        <form className='login-form' onSubmit={handleSubmit(submitLogin)}>
            <section className='login-input'>
                <img src="/images/login/usuario.png" alt="user.png"/>
                <input type="text" {...register('username')}
                className='form-input' placeholder="Nombre de usuario"/>
            </section>

            <section className='login-password'>
                <img src="/images/login/candado.png" alt=""/>
                <input type="password" {...register('password')} id='password-input-login'
                placeholder="Contraseña" className='form-input'></input>
                <PasswordEye input={document.getElementById('password-input-login')}/> 
            </section>

            <p hidden className='login-error' id='mensaje-error'>Nombre de usuario o contraseña incorrectos</p>
        
            <button className='green-button'>Iniciar Sesión</button>
            <button onClick={ goNewAccount }>¿No tiene cuenta? Cree una</button>

            <a onClick={ goBackEvent }>Volver atrás</a>
        </form>
    )
}


