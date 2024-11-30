import { useNavigate } from 'react-router';
import { confirmarPassword } from '../../api';

import '../../styles/cambiarPassword/verificarPassword.css';
import '/src/global/styles/elementos.css';
import '/src/global/styles/formularios.css';
import { useForm } from 'react-hook-form';


export const CambiarPassword = () => {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const submitNewPassword = (data) => {

    }

    return (
        <main className="nube check-password-container">    
            <h2>Cambiar tu contraseña</h2>
            <p>La nueva contraseña debe combinar mayúsculas minúsculas, carácteres especiales
            y números</p>
            <div>
                <form method="post" onSubmit={ handleSubmit(submitNewPassword) }>
                    <input type="text" className='form-input'
                    {...register('password', {
                        required : 'Campo obligatorio',
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{14,}$/,
                            message: 'Esta contraseña no cumple con las reglas'
                        }
                    })} />
                </form>
            </div>
        </main>
    )
}
