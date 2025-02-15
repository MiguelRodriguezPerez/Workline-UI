import { useForm } from "react-hook-form"
import { CabeceraMiPerfil, BorrarCuentaButton } from "./"
import { editarUsuarioEntidad, obtenerUsuarioEntidad } from "../../api";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../global/context/AuthContext";
import { useNavigate } from "react-router";
import { CambiarPassword } from "../cambiarPassword/CambiarPassword";
import { useDispatch } from "react-redux";
import { updateLoggedUser } from "../../../../global/redux/slices/loggedUser";
import { activarEdicion, desactivarEdicion } from "../../helpers/entidadesCard";

import '../../styles/general/formularioDatos.css';
import '../../styles/general/formularioDatosReadOnly.css';
import '/src/global/styles/formularios.css';


export const FormularioDatosUsuario = () => {

  const [ isEditable, setIsEditable ] = useState(false);
  const { updateUser } = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, reset, formState: { errors }, handleSubmit } = useForm({
    defaultValues: async () => await obtenerUsuarioEntidad()
  });


  useEffect(() => {
    //Id del formulario
    isEditable ? activarEdicion('form-user') : desactivarEdicion('form-user');
  }, [isEditable] )


  const desactivarEdicionWrapper = () => {
    setIsEditable(false);
    reset();
  }

  const submitEdit = async (data) => {
    desactivarEdicion('form-user');
    setIsEditable(false); 
    
    const resultado = await editarUsuarioEntidad(data);
    if (resultado.status === 201) dispatch(updateLoggedUser(resultado.data));
  }

  return (
    <section className="container-formulario" id="form-user">
      {
        (isEditable) ?
        <p className="heading-link" onClick={ desactivarEdicionWrapper }>Cancelar</p>
        :  
        <p className="heading-link" onClick={ () => { setIsEditable(true) } }>Editar datos</p> 
      }
      <form method="post" onSubmit={handleSubmit(submitEdit)} className="formulario-datos">
        <div>
          <label className="form-label">Nombre</label>
          <input type="text" className="form-input"
            {
            ...register('nombre', {
              required: 'Campo obligatorio',
              maxLength: {
                value: 25,
                message: 'Máximo 25 carácteres'
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
          {isEditable && <input type="submit" value="Subir cambios" className="green-button" />}
        </div>
      </form>
      <div className="row-botones">
        <BorrarCuentaButton />
        <button className="green-button"
          onClick={() => { navigate('/miPerfil/confirmarPassword') }}>Cambiar contraseña</button>
      </div>
    </section>
  )
}
