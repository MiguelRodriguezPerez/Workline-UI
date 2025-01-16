import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedUser, updateLoggedUser } from '../../../global/redux/slices/loggedUser';

import '../styles/loginForm.css';
import '/src/global/styles/elementos.css';
import '/src/global/styles/formularios.css';
import { worklineStore } from '../../../global/redux/store/worklineStore';

export const LoginForm = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    /*Cuando axios recibe una respuesta 400 lanza una excepción. Si da una excepción, es que el login
    fue mal y el contexto no se pudo actualizar. No se me ocurrió nada mejor*/
    const submitLogin = async(data) => {
        try { await dispatch(getLoggedUser(data)) } 
        catch (error) { 
            document.getElementById('mensaje-error').removeAttribute('hidden')
            //Cada fallo de login es otro log más de errores
            console.clear();
        }
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


