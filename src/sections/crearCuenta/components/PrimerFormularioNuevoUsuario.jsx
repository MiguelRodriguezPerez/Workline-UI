import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { esNombreRepetido } from '../api';
import { prepararUsuarioDto } from "../helpers";
import { useCrearUsuario } from "../hooks";

import '../styles/formularioNuevoUsuario.css';
import '/src/global/styles/elementos.css';
import '/src/global/styles/formularios.css';


export const PrimerFormularioNuevoUsuario = () => {

    const { register, reset, formState: { errors }, handleSubmit } = useForm({});
    const { gestionarCrearUsuario } = useCrearUsuario();

    const defaultParams = {
        nombre: '',
        email: '',
        rol: '',
        ciudad: '',
        telefono: '',
        password: ''
    }

    return (
        // Este elemento debería estar en su propio componente
        <main className="form-container">
            <form method="post" onSubmit={handleSubmit(gestionarCrearUsuario)} className="new-user-form">
                <div className="primer-div">
                    <Link to={'/login'} className="heading-link">Volver atrás</Link>
                    <p onClick={() => reset(defaultParams)}>Borrar datos</p>
                </div>
                <div>
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-input"
                        {
                        ...register('nombre', {
                            required: 'Campo obligatorio',
                            maxLength: {
                                value: 25,
                                message: 'Máximo 25 carácteres'
                            },
                            validate: async (nombre) => { 
                                const esValido = await esNombreRepetido(nombre); 
                                // devuelve false si el nombre no es repetido
                                return !esValido || 'Este usuario ya existe';
                            }
                            })
                        } />
                    <p className="mensaje-error">{errors.nombre?.message}</p>

                    <label className="form-label">Email</label>
                    <input type="text" className="form-input"
                        {
                        ...register('email', {
                            required: 'Campo obligatorio',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Email no válido'
                            },
                            maxLength: {
                                value: 35,
                                message: 'El email no puede tener más de 35 carácteres'
                            }
                        })
                        }
                    />
                    <p className="mensaje-error">{errors.email?.message}</p>

                    <label htmlFor="rol" className="form-label">¿Para que vas a usar la cuenta?</label>
                    <select name="rol" className="form-input"
                        {
                        ...register('rol', { required: 'Campo obligatorio' })
                        }>
                        <option value="">Selecciona una opción</option>
                        <option value="CONTRATA">Contratar personal</option>
                        <option value="BUSCA">Buscar trabajo</option>
                    </select>
                    <p className="mensaje-error">{errors.rol?.message}</p>

                </div>

                <div>
                    <label className="form-label">Ciudad</label>
                    <input type="text" className="form-input"
                        {
                        ...register('ciudad', {
                            pattern: {
                                value: /^[a-zA-Z\s]+$/,
                                message: 'La ciudad solo puede contener letras'
                            },
                            maxLength: {
                                value: 25,
                                message: 'Máximo 25 carácteres'
                            }
                        })
                        }
                    />
                    <p className="mensaje-error">{errors.ciudad?.message}</p>

                    <label className="form-label">Telefono</label>
                    <input type="text" className="form-input"
                        {
                        ...register('telefono', {
                            pattern: {
                                value: /^[6-9]\d{8}$/,
                                message: 'Teléfono inválido'
                            }
                        })
                        } />
                    <p className="mensaje-error">{errors.telefono?.message}</p>

                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-input" id="password-ref-new-user"
                            {
                            ...register('password', {
                                required: 'Campo obligatorio',
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{14,}$/,
                                    message: 'Minímo 14 carácteres combinando mayúsculas, minúsculas, números y carácteres especiales'
                                }
                            })
                            }/>

                    <p className="mensaje-error">{errors.password?.message}</p>

                </div>
                <input type="submit" value="Crear cuenta" className="green-button" />
            </form>
        </main>
    )
}
