import { useForm } from "react-hook-form"
import { CabeceraMiPerfil } from "./CabeceraMiPerfil"
import { obtenerUsuarioEntidad } from "../api/obtenerUsuarioEntidad"

export const FormularioDatos = () => {

  const { register, formState: {errors}, handleSubmit } = useForm({
    defaultValues: async () => await obtenerUsuarioEntidad()
  });

  return (
    <section>
      <CabeceraMiPerfil/>

      <form action="" method="post">
        <div>
          <label>Nombre</label>
          <input type="text" 
            {
              ...register('nombre', {
                required: 'Campo obligatorio',
                maxLength: {
                  value: 25,
                  message: 'Máximo 25 carácteres'
                }
              })
            }/>
          <p>{errors.nombre?.message}</p>
          <label>Email</label>
          <input type="text" 
            {
              ...register('email', {
                required: 'Campo obligatorio',
                pattern:{
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
          <label>Ciudad</label>
          <input type="text" 
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
          <label>Telefono</label>
          <input type="text" 
            {
              ...register('telefono', {
                pattern: {
                  value: /^[6-9]\d{8}$/,
                  message: 'Teléfono inválido'
                }
              })
          }/>
          <p className="mensaje-error">{errors.telefono?.message}</p>
        </div>
      </form>
    </section>
  )
}
