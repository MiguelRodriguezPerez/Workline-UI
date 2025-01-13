import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../global/context/AuthContext';
import { PasswordEye } from '../../../ui/components/forms/PasswordEye';
import { uploadLogin } from '../api';
import { useForm } from 'react-hook-form';

import '../styles/loginForm.css';
import '/src/global/styles/elementos.css';
import '/src/global/styles/formularios.css';
import { useDispatch } from 'react-redux';
import { getLoggedUser, updateLoggedUser } from '../../../global/redux/slices/loggedUser';


export const LoginForm = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { updateUser, resetUser } = useContext(AuthContext);
    const dispatch = useDispatch();
    /*Necesitas esta obra de arte de React para garantizar que siempre le llegará a PasswordEye
    el nodo de la contraseña para poder cambiarlo de password a text y viceversa.
    
    Cuando probaste a hacerlo sin usar esta magnífica maravilla al irte a crear nueva cuenta y
    volver aquí, PasswordEye recibía null en vez del input*/
    const [ passwordNode, setPasswordNode ] = useState();
    useEffect(() => {
        document.getElementById("password-input-login")
        && setPasswordNode(document.getElementById("password-input-login"));
    }, [])

    const submitLogin = async(data) => {
        dispatch(getLoggedUser(data));
        // TODO: Controlar posibles errores 
        
        // if(loggedUser.data){
        //     updateUser(loggedUser.data);
        //     navigate('/');
        // }
        // else document.getElementById('mensaje-error').removeAttribute('hidden');
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
                <PasswordEye input={ passwordNode }/> 
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


