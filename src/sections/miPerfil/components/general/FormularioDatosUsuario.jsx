import { useForm } from "react-hook-form"
import { CabeceraMiPerfil, BorrarCuentaButton } from "./"
import { editarUsuarioEntidad, obtenerUsuarioEntidad } from "../../api";
import { useContext } from "react";
import { AuthContext } from "../../../../global/context/AuthContext";
import { useSwitchHideLabel, useSwitchReadOnly, useSwitchHideBottomBorder } from "../../../../global/hooks";
import { useNavigate } from "react-router";

import '../../styles/general/formularioDatos.css';
import '/src/global/styles/formularios.css';



export const FormularioDatosUsuario = () => {

  const { updateUser } = useContext(AuthContext);
  const { isReadOnly, turnOnReadOnly, turnOffReadOnly } = useSwitchReadOnly(true, 'form-user');
  const { turnOnHideLabel, turnOffHideLabel } = useSwitchHideLabel(true, 'form-user');
  const { turnOnHideBorder, turnOffHideBorder } = useSwitchHideBottomBorder(true, 'form-user');
  const navigate = useNavigate();

  const { register, reset, formState: { errors }, handleSubmit } = useForm({
    defaultValues: async () => await obtenerUsuarioEntidad()
  });

  const editClick = () => {
    turnOffReadOnly();
    turnOffHideLabel();
    turnOffHideBorder();
  }

  const cancelClick = () => {
    turnOnReadOnly();
    turnOnHideLabel();
    turnOnHideBorder();
    reset();
  }

  const submitEdit = async (data) => {
    turnOnReadOnly();
    turnOnHideLabel();
    turnOnHideBorder();
    const resultado = await editarUsuarioEntidad(data);
    if (resultado.status === 201) updateUser(resultado.data);
  }

  return (
    <section className="container-formulario" id="form-user">
      {
        (isReadOnly) ?
          <p className="heading-link" onClick={editClick}>Editar datos</p>
          :
          <p className="heading-link" onClick={cancelClick}>Cancelar</p>
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
          <p>{errors.email?.message}</p>
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
          {!isReadOnly && <input type="submit" value="Subir cambios" className="green-button" />}
        </div>
      </form>
      <div className="row-botones">
        <BorrarCuentaButton />
        <button className="green-button" style={{ display: "none" }}
          onClick={() => { navigate('/miPerfil/confirmarPassword') }}>Cambiar contraseña</button>
      </div>
    </section>
  )
}
