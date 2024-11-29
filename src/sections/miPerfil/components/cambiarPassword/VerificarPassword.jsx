import { useNavigate } from 'react-router';
import { confirmarPassword } from '../../api';

import '../../styles/verificarPassword.css';
import '/src/global/styles/elementos.css';
import '/src/global/styles/formularios.css';


export const VerificarPassword = () => {

    const navigate = useNavigate();

    const checkPassword = async (event) => {
        event.preventDefault();
        
        const defPassword = document.getElementById('user-password').value;

        const resultado = await confirmarPassword(defPassword);

        if(resultado.status == 200){
            console.log(resultado)
            if(resultado.data) navigate('/miPerfil/cambiarPassword');
            else document.getElementById('password-error').textContent = 'Contraseña incorrecta'
        }
    } 

    return (
        <main className="nube check-password-container">
            <form method="post">
                <h2>Verifica tu contraseña</h2>
                <p>Para cambiar tu contraseña, primero debes confirmarla</p>
                <div>
                    <input type="password" id='user-password' className='form-input'/>
                    <button className='green-button' onClick={checkPassword}>Comprobar contraseña</button>
                    <p className='login-error mensaje-error' id='password-error'></p>
                </div>
            </form>
        </main>
    )
}
