import { useNavigate } from 'react-router';
import { confirmarPassword } from '../../api';
import { useForm } from 'react-hook-form';

import '../../styles/cambiarPassword/verificarPassword.css';
import '/src/global/styles/elementos.css';
import '/src/global/styles/formularios.css';
import { cambiarPassword } from '../../api/cambiarPassword';



export const CambiarPassword = () => {

    const navigate = useNavigate();
    const { register, formState : {errors} ,handleSubmit } = useForm();

    const submitNewPassword = async(data) => {
        console.log(data.newPassword)
        const resultado = await cambiarPassword(data.newPassword);
        if(resultado.status === 200) navigate('/miPerfil/misDatos');
    }

    return (
        <main className="nube check-password-container">    
            <form method="post" onSubmit={ handleSubmit(submitNewPassword) }>
            <h2>Cambiar tu contraseña</h2>
            <p>La nueva contraseña debe combinar mayúsculas minúsculas, carácteres especiales
            y números</p>
            <div>
                <input type="password" className='form-input'
                {...register('newPassword', {
                    required : 'Campo obligatorio',
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{14,}$/,
                        message: 'Esta contraseña no cumple con las reglas'
                    }
                })} />
                <button className='green-button'>Confirmar cambios</button>
            </div>
            <p className='mensaje-error'>{errors.password?.message}</p>
            </form>
        </main>
    )
}
