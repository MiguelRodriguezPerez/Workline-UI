import { useForm } from 'react-hook-form'
import { editarExperiencia, borrarExperiencia } from '/src/global/api/seccionBusca/experiencia'
import { compararFechas } from '/src/global/helpers/fechas'
import { useSwitchReadOnly, useSwitchHideLabel, useSwitchHideBottomBorder } from '/src/global/hooks'
import { prepararExperienciaDto } from '../../../helpers'
import { OpcionesCard } from '../OpcionesCard'


import '../../../styles/seccionBusca/entidadCard.css'
import '/src/global/styles/elementos.css'


export const ExperienciaCard = ({ data = {}, refreshData }) => {

  const { isReadOnly, turnOffReadOnly, turnOnReadOnly } = useSwitchReadOnly(true, data.id);
  const { turnOffHideLabel, turnOnHideLabel } = useSwitchHideLabel(true, data.id);
  const { turnOnHideBorder, turnOffHideBorder} = useSwitchHideBottomBorder(true, data.id);
  const { register, reset, formState: { errors }, getValues, handleSubmit } = useForm({
    defaultValues: data
  });

  const editSubmit = async (data) => {
    const experienciaDto = prepararExperienciaDto(data);
    const resultado = await editarExperiencia(experienciaDto, data.id);

    if (resultado.status === 201) {
      refreshData();
      turnOnReadOnly();
      turnOnHideLabel();
      turnOnHideBorder();
    }
  }

  const callbackOpcionesCard = () => {
    turnOffHideLabel();
    turnOffReadOnly();
    turnOffHideBorder();
  }

  const cancelEvent = () => {
    turnOnHideLabel();
    turnOnReadOnly();
    turnOnHideBorder();
    reset();
  }

  const borrarExperienciaCallback = async (id) => {
    const resultado = await borrarExperiencia(id);

    if(resultado.status === 204) refreshData();
  }

  return (
    <li className='entidad-card nube' id={data.id}>
      <form method="post" onSubmit={handleSubmit(editSubmit)}>
        <section className='entidad-card-section'>
          <div>
            <label>Puesto</label>
            <input type="text" className='form-input'
              {...register('puesto', {
                required: 'Campo obligatorio',
                maxLength: {
                  value: 40,
                  message: 'Máximo 40 carácteres'
                }
              }
              )}
            />
            <p className='mensaje-error'>{errors.puesto?.message}</p>
          </div>

          <div>
            <label htmlFor="empresa">Empresa</label>
            <input type="text" className='form-input'
              {...register('empresa', {
                required: 'Campo obligatorio',
                maxLength: {
                  value: 40,
                  message: 'Máximo 40 carácteres'
                }
              })}
            />
            <p className='mensaje-error'>{errors.empresa?.message}</p>
          </div>
          <div>
            <OpcionesCard activarEdicion={callbackOpcionesCard} borrarEntidad={() => {borrarExperienciaCallback(data.id)}}/>
          </div>
        </section>

        <section className='entidad-card-section'>
          <div>
            <label htmlFor="inicioExperiencia">Fecha inicio</label>
            <input type="text" className='form-input'
              {...register('inicioExperiencia', {
                required: 'Fecha obligatoria',
                pattern: {
                  value: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
                  message: 'Fecha inválida. El formato válido es yyyy-mm-dd'
                }
              })}
            />
            <p className='mensaje-error'>{errors.inicioExperiencia?.message}</p>
          </div>
          <div>
            <label htmlFor="finExperiencia">Fin experiencia</label>
            <input type="text" className='form-input'
              {...register('finExperiencia', {
                required: 'Fecha obligatoria',
                pattern: {
                  value: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
                  message: 'Fecha inválida. El formato válido es yyyy-mm-dd'
                },
                validate: (value) => {
                  if (!compararFechas(getValues('inicioExperiencia'), value))
                    return true;
                  else return 'Fechas incorrectas'
                }
              })}
            />
            <p className='mensaje-error'>{errors.finExperiencia?.message}</p>
          </div>
        </section>
        {
          !isReadOnly &&
          <section className='entidad-card-section'>
            <p onClick={cancelEvent}>Cancelar</p>
            <button className='green-button'> Subir cambios </button>
          </section>
        }
      </form>
    </li>
  )
}

{/* <li className='entidad-card nube'>
        <h3>{data.puesto}</h3>
        <OpcionesCard/>
        <p>{data.empresa}</p>
        <p>{data.inicioExperiencia + ' ' + data.finExperiencia}</p>
    </li> */}
