import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../global/context/AuthContext';
import { PasswordEye } from '../../../ui/components/forms/PasswordEye';
import { uploadLogin } from '../api';
import { useForm } from 'react-hook-form';

import '../styles/loginForm.css';
import '/src/global/styles/elementos.css';
import '/src/global/styles/formularios.css';
import { almacenarUsuarioLogueado } from '../helpers';


export const LoginForm = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { updateUser, resetUser } = useContext(AuthContext);

    const submitLogin = async (data) => {

        const loggedUser = await uploadLogin(data);
        if (loggedUser.data) {
            almacenarUsuarioLogueado(loggedUser.data);
            updateUser(loggedUser.data);
            navigate('/');
        }
        else document.getElementById('mensaje-error').removeAttribute('hidden');
    }

    return (
        <form className='login-form' onSubmit={handleSubmit(submitLogin)}>
            <section className='login-input'>
                <img src="/images/login/usuario.png" alt="user.png" />
                <input type="text" {...register('username')}
                    className='form-input' placeholder="Nombre de usuario" />
            </section>

            <section className='login-password'>
                <img src="/images/login/candado.png" alt="" />
                <input type="password" {...register('password')} id='password-input-login'
                    placeholder="Contraseña" className='form-input' ></input>
            </section>

            <p hidden className='login-error' id='mensaje-error'>Nombre de usuario o contraseña incorrectos</p>

            <button className='green-button'>Iniciar Sesión</button>
            <button onClick={
                (event) => {
                    event.preventDefault();
                    navigate('/nuevaCuenta/primeraParte');
                }
            }>¿No tiene cuenta? Cree una</button>

            <a onClick={
                (event) => {
                    event.preventDefault();
                    navigate('/');
                }
            }>Volver al inicio</a>
        </form>
    )
}


