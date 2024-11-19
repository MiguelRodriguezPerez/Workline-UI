import { OpcionesCard } from '../OpcionesCard'
import { useSwitchReadOnly } from '/src/global/hooks'
import { useForm } from 'react-hook-form'
import { prepararConocimientoDto } from '../../../helpers'
import { editarConocimiento, borrarConocimiento } from '/src/global/api/seccionBusca/conocimiento'


import '../../../styles/seccionBusca/entidadCard.css'
import '/src/global/styles/elementos.css'
import { compararFechas } from '../../../../../global/helpers/fechas/compararFechas'


export const ConocimientoCard = ( { data = {} }) => {

  const { isReadOnly, turnOffReadOnly, turnOnReadOnly } = useSwitchReadOnly(true, data.id);
  const { register, formState: { errors }, getValues, handleSubmit } = useForm({
    defaultValues: data
  });

  const editSubmit = async (data) => {
    const conocimientoDto = prepararConocimientoDto(data);
    const resultado = await editarConocimiento(conocimientoDto, data.id);

    if (resultado.status === 201) {
      window.location.reload();
      turnOnReadOnly();
    }
  }

  return (
    <li className='entidad-card nube' id={data.id}>
        <form method="post" onSubmit={handleSubmit(editSubmit)}>
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
            <div>
              <OpcionesCard activarEdicion={turnOffReadOnly} borrarEntidad={() => borrarConocimiento(data.id)}/>
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
            <label htmlFor="finPeriodoConocimiento">Fin período estudios</label>
            <input type="text" className='form-input'
              {...register('finPeriodoConocimiento', {
                required: 'Fecha obligatoria',
                pattern: {
                  value: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
                  message: 'Fecha inválida. El formato válido es yyyy-mm-dd'
                },
                validate: (value) => {
                  if (!compararFechas(getValues('inicioPeriodoConocimiento'), value))
                    return true;
                  else return 'Fechas incorrectas'
                }
              })}
            />
            <p className='mensaje-error'>{errors.finPeriodoConocimiento?.message}</p>
          </div>
        </section>
        {
          !isReadOnly &&
          <section className='entidad-card-section'>
            <p onClick={turnOnReadOnly}>Cancelar</p>
            <button className='green-button'> Subir cambios </button>
          </section>
        }
        </form>
    </li>
  )
}
