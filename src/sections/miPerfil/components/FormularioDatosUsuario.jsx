import { useForm } from "react-hook-form"
import { CabeceraMiPerfil } from "./CabeceraMiPerfil"
import { editarUsuarioEntidad, obtenerUsuarioEntidad } from "../api";
import { useContext } from "react";
import { AuthContext } from "../../../global/context/AuthContext";
import { useSwitchReadOnly } from "../../../global/hooks";

import '../styles/formularioDatos.css';
import '/src/global/styles/formularios/input.css';
import '/src/global/styles/formularios/label.css';
import '/src/global/styles/formularios/headingLink.css';


export const FormularioDatosUsuario = () => {

  const { updateUser } = useContext(AuthContext);
  const { isReadOnly, turnOnReadOnly, turnOffReadOnly } = useSwitchReadOnly(true);

  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: async () => await obtenerUsuarioEntidad()
  });

  const submitEdit = async (data) => {
    setIsEditEnabled(false);
    const resultado = await editarUsuarioEntidad(data);
    if (resultado.status === 201) updateUser(resultado.content);
  }

  return (
    <section className="container-formulario">
      <CabeceraMiPerfil />
      {
        (isReadOnly) ?
          <p className="heading-link" onClick={ turnOffReadOnly }>Editar datos</p>
          :
          <p className="heading-link" onClick={ turnOnReadOnly }>Cancelar</p>
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
    </section>
  )
}
