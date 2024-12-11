import { useForm } from 'react-hook-form'
import { prepararConocimientoDto } from '../../../helpers'
import { guardarNuevoConocimiento } from '/src/global/api/seccionBusca/conocimiento'
import { compararFechas } from '../../../../../global/helpers/fechas/compararFechas'
import { useContext } from 'react'
import { ComponenteActivoContext } from '../ComponenteActivoProvider'

import '../../../styles/seccionBusca/nuevaEntidadCard.css'
import '/src/global/styles/elementos.css'

export const NuevoConocimientoCard = ( { data = {}, refreshData }) => {

  const { setButtonNuevaEntidad } = useContext(ComponenteActivoContext);
  const { register, formState: { errors }, getValues, handleSubmit, reset } = useForm({
    defaultValues: data
  });

  const newSubmit = async (data) => {
    const conocimientoDto = prepararConocimientoDto(data);
    const resultado = await guardarNuevoConocimiento(conocimientoDto);
    if(resultado.status === 201){
      /*setButtonNuevaEntidad la función que pone el botón verde de Nuevo Conocimiento/Experiencia de miPerfil
      en el DOM tras crear una entidad
      
      La razón por la que estas preguntando si existe es porque este componente se utiliza también
      en la segunda página de crear un nuevo busca*/
      setButtonNuevaEntidad && setButtonNuevaEntidad();
      refreshData();
      
      /*Cuando creas un nuevo usuario busca los formularios quedan expuestos, de manera que los reinicias*/
      reset();
    }
  }

  return (
    <section className='entidad-card nube nueva-entidad' id={data.id}>
        <form method="post" onSubmit={handleSubmit(newSubmit)}>
          <section className='entidad-card-section'>
            <div>
              <label htmlFor="titulo">Titulo</label>
              <input type="text" className='form-input' 
                {...register('titulo' , {
                  required : 'Campo obligatorio',
                  maxLength : {
                    value : 40,
                    message : 'Máximo 40 carácteres'
                  }
                })}
              />
              <p className='mensaje-error'>{errors.titulo?.message}</p>
            </div>
            <div>
              <label htmlFor="centroEducativo">Centro Educativo</label>
              <input type="text" className='form-input' 
                {...register('centroEducativo' , {
                  required : 'Campo obligatorio',
                  maxLength : {
                    value : 40,
                    message : 'Máximo 40 carácteres'
                  }
                })}
              />
              <p className='mensaje-error'>{errors.centroEducativo?.message}</p>
            </div>
          </section>

          <section className='entidad-card-section'>
          <div>
            <label htmlFor="inicioPeriodoConocimiento">Fecha inicio</label>
            <input type="text" className='form-input'
              {...register('inicioPeriodoConocimiento', {
                required: 'Fecha obligatoria',
                pattern: {
                  value: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
                  message: 'Fecha inválida. El formato válido es yyyy-mm-dd'
                }
              })}
            />
            <p className='mensaje-error'>{errors.inicioPeriodoConocimiento?.message}</p>
          </div>
          <div>
            <label htmlFor="finPeriodoConocimiento">Fin  estudios</label>
            <input type="text" className='form-input'
              {...register('finPeriodoConocimiento', {
                required: 'Fecha obligatoria',
                pattern: {
                  value: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
                  message: 'Fecha inválida. El formato válido es yyyy-mm-dd'
                },
                validate: (value) => {
                  if (compararFechas(getValues('inicioPeriodoConocimiento'), value))
                    return true;
                  else return 'La fecha de fin es anterior a la de inicio';
                }
              })}
            />
            <p className='mensaje-error'>{errors.finPeriodoConocimiento?.message}</p>
          </div>
        </section>
        <section className='entidad-card-section ultimo-section'>
            <p></p>
            <button className='green-button'> Subir cambios </button>
        </section>
        </form>
    </section>
  )
}

